"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

export default function CompleteProfileForm() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [phone, setPhone] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const validatePhone = (value: string) => {
    const phoneRegex = /^(0|\+84)[3-9]\d{8}$/;
    if (!value) return "Số điện thoại không được để trống";
    if (!phoneRegex.test(value)) return "Số điện thoại không hợp lệ";
    return "";
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    if (phoneError) setPhoneError(validatePhone(value));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      return;
    }
    setCvFile(file);
  };

  const handleRemoveFile = () => {
    setCvFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validatePhone(phone);
    if (error) {
      setPhoneError(error);
      return;
    }
    setIsSubmitting(true);
    // TODO: call API to save phone + CV, then redirect
    await new Promise((r) => setTimeout(r, 800)); // simulate API call
    router.push("/candidate");
  };

  const isValid = phone.length > 0 && !validatePhone(phone);

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-lg border border-slate-100 p-8 flex flex-col gap-6">
      {/* Header */}
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Hoàn tất hồ sơ
        </h1>
        <p className="text-sm text-slate-500">
          Thêm thông tin để chúng tôi hỗ trợ bạn tốt hơn
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
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
            onChange={handlePhoneChange}
            onBlur={() => setPhoneError(validatePhone(phone))}
            className={phoneError ? "border-red-400 focus-visible:ring-red-300" : ""}
          />
          {phoneError && (
            <p className="text-xs text-red-500">{phoneError}</p>
          )}
        </div>

        {/* CV Upload */}
        <div className="flex flex-col gap-1.5">
          <Label className="text-sm font-medium text-slate-700">
            CV của bạn{" "}
            <span className="text-slate-400 font-normal">(không bắt buộc)</span>
          </Label>

          {cvFile ? (
            <div className="flex items-center gap-3 px-4 py-3 rounded-lg border border-primary-200 bg-primary-25">
              <FileText className="size-5 text-primary-500 shrink-0" />
              <span className="text-sm text-slate-700 truncate flex-1">
                {cvFile.name}
              </span>
              <button
                type="button"
                onClick={handleRemoveFile}
                className="text-slate-400 hover:text-red-500 transition-colors shrink-0"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center gap-2 px-4 py-6 rounded-lg border-2 border-dashed border-slate-200 hover:border-primary-300 hover:bg-primary-25 transition-all cursor-pointer"
            >
              <Upload className="size-5 text-slate-400" />
              <span className="text-sm text-slate-500">
                Click để chọn file PDF
              </span>
              <span className="text-xs text-slate-400">Tối đa 5MB</span>
            </button>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
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
              <span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Đang xử lý...
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
