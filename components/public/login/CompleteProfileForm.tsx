"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, X, CheckCircle, Loader2 } from "lucide-react";

const API = process.env.NEXT_PUBLIC_API_URL;
const MAX_SIZE = 2 * 1024 * 1024; // 2 MB
const ALLOWED_EXTENSIONS = [".pdf", ".docx"];
const ALLOWED_TYPES = [
  "application/pdf",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export default function CompleteProfileForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const [nameError, setNameError] = useState("");

  // Pre-fill tên từ Google profile
  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (!token) return;
    fetch(`${API}/api/v1/users/me`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.fullName) setFullName(data.fullName);
      })
      .catch(() => {});
  }, []);

  // ─── Validation ────────────────────────────────────────────────────────────
  const validateName = (v: string) => {
    if (!v.trim()) return "Họ tên không được để trống";
    if (v.trim().length < 2) return "Họ tên phải có ít nhất 2 ký tự";
    return "";
  };

  const validatePhone = (v: string) => {
    const phoneRegex = /^(0|\+84)[3-9]\d{8}$/;
    if (!v) return "Số điện thoại không được để trống";
    if (!phoneRegex.test(v)) return "Số điện thoại không hợp lệ";
    return "";
  };

  const validateFile = (file: File): string => {
    const ext = "." + file.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_TYPES.includes(file.type) || !ALLOWED_EXTENSIONS.includes(ext)) {
      return "Chỉ chấp nhận file PDF hoặc DOCX";
    }
    if (file.size > MAX_SIZE) {
      return "File không được vượt quá 2MB";
    }
    return "";
  };

  // ─── File handlers ─────────────────────────────────────────────────────────
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) {
      setCvError(err);
      return;
    }
    setCvError("");
    setCvFile(file);
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    setCvError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file) return;
    const err = validateFile(file);
    if (err) { setCvError(err); return; }
    setCvError("");
    setCvFile(file);
  };

  // ─── Submit ────────────────────────────────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nErr = validateName(fullName);
    const pErr = validatePhone(phone);
    if (nErr) { setNameError(nErr); return; }
    if (pErr) { setPhoneError(pErr); return; }

    const accessToken = localStorage.getItem("access_token");
    setIsSubmitting(true);
    setIsUploading(false);

    try {
      let cvUrl: string | undefined;

      // Step 1: Upload CV nếu có
      if (cvFile) {
        setIsUploading(true);
        const formData = new FormData();
        formData.append("file", cvFile);
        const uploadRes = await fetch(`${API}/api/v1/upload/cv`, {
          method: "POST",
          headers: { Authorization: `Bearer ${accessToken}` },
          body: formData,
        });
        if (!uploadRes.ok) {
          const err = await uploadRes.json().catch(() => ({}));
          throw new Error(err?.message ?? "Upload CV thất bại");
        }
        const uploadData = await uploadRes.json();
        cvUrl = uploadData.url;
        setIsUploading(false);
      }

      // Step 2: Cập nhật profile
      const body: Record<string, string> = {
        fullName: fullName.trim(),
        phone,
      };
      if (cvUrl) body.cvUrl = cvUrl;

      const res = await fetch(`${API}/api/v1/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(body),
      });
      if (!res.ok) throw new Error("Không thể cập nhật thông tin. Vui lòng thử lại.");

      router.push("/candidate");
    } catch (err) {
      setPhoneError(err instanceof Error ? err.message : "Đã xảy ra lỗi");
    } finally {
      setIsSubmitting(false);
      setIsUploading(false);
    }
  };

  const isValid =
    fullName.trim().length >= 2 &&
    phone.length > 0 &&
    !validatePhone(phone);

  const submitLabel = isUploading ? "Đang upload CV..." : isSubmitting ? "Đang xử lý..." : "Xác nhận đăng ký";

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Hoàn tất hồ sơ</h1>
        <p className="text-sm text-slate-500">Thêm thông tin để chúng tôi hỗ trợ bạn tốt hơn</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Full Name */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="fullName" className="text-sm font-medium text-slate-700">
            Họ và tên <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="Nguyễn Văn A"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              if (nameError) setNameError(validateName(e.target.value));
            }}
            onBlur={() => setNameError(validateName(fullName))}
            className={nameError ? "border-red-400 focus-visible:ring-red-300" : ""}
          />
          {nameError && <p className="text-xs text-red-500">{nameError}</p>}
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
            Số điện thoại <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="0912 345 678"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phoneError) setPhoneError(validatePhone(e.target.value));
            }}
            onBlur={() => setPhoneError(validatePhone(phone))}
            className={phoneError ? "border-red-400 focus-visible:ring-red-300" : ""}
          />
          {phoneError && <p className="text-xs text-red-500">{phoneError}</p>}
        </div>

        {/* CV Upload */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium text-slate-700">
            CV của bạn{" "}
            <span className="text-slate-400 font-normal">(không bắt buộc)</span>
          </Label>

          {cvFile ? (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-emerald-200 bg-emerald-50">
              <FileText className="size-5 text-emerald-600 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 truncate">{cvFile.name}</p>
                <p className="text-xs text-slate-400">
                  {(cvFile.size / 1024).toFixed(0)} KB
                </p>
              </div>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-slate-400 hover:text-red-500 transition-colors shrink-0 p-1"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
              className={`flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-lg border-2 border-dashed transition-all cursor-pointer ${
                cvError
                  ? "border-red-300 bg-red-50"
                  : "border-slate-200 hover:border-primary-300 hover:bg-primary-25"
              }`}
            >
              <Upload className={`size-5 ${cvError ? "text-red-400" : "text-slate-400"}`} />
              <span className="text-sm text-slate-500">
                Click hoặc kéo thả file vào đây
              </span>
              <span className="text-xs text-slate-400">PDF, DOCX · Tối đa 2MB</span>
            </button>
          )}

          {cvError && <p className="text-xs text-red-500">{cvError}</p>}

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        {/* Submit */}
        <Button
          type="submit"
          size="lg"
          disabled={!isValid || isSubmitting}
          className="w-full font-semibold"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="size-4 animate-spin" />
              {submitLabel}
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <CheckCircle className="size-4" />
              Xác nhận đăng ký
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
