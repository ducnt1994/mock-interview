"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Pencil, Trash2, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";
import { getAccessToken } from "@/lib/auth";

interface Candidate {
  id: string;
  email: string;
  fullName: string | null;
  phone: string | null;
  role: string;
}

interface PaginatedResponse {
  data: Candidate[];
  total: number;
  page: number;
  limit: number;
}

const API = process.env.NEXT_PUBLIC_API_URL;
const LIMIT = 10;

export default function CandidateListPage() {
  const router = useRouter();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  // Edit state
  const [editTarget, setEditTarget] = useState<Candidate | null>(null);
  const [editName, setEditName] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [editSaving, setEditSaving] = useState(false);

  // Delete state
  const [deleteTarget, setDeleteTarget] = useState<Candidate | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const totalPages = Math.ceil(total / LIMIT);

  const fetchCandidates = useCallback(async (p: number) => {
    setLoading(true);
    const token = getAccessToken();
    try {
      const res = await fetch(
        `${API}/api/v1/users?role=candidate&page=${p}&limit=${LIMIT}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (res.status === 401 || res.status === 403) {
        router.replace("/");
        return;
      }
      const json: PaginatedResponse = await res.json();
      setCandidates(json.data);
      setTotal(json.total);
      setPage(json.page);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchCandidates(1);
  }, [fetchCandidates]);

  // ─── Edit ────────────────────────────────────────────────────────────────
  const openEdit = (c: Candidate) => {
    setEditTarget(c);
    setEditName(c.fullName ?? "");
    setEditPhone(c.phone ?? "");
  };

  const handleSaveEdit = async () => {
    if (!editTarget) return;
    setEditSaving(true);
    try {
      const token = getAccessToken();
      await fetch(`${API}/api/v1/users/${editTarget.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ fullName: editName, phone: editPhone }),
      });
      setEditTarget(null);
      fetchCandidates(page);
    } finally {
      setEditSaving(false);
    }
  };

  // ─── Delete ─────────────────────────────────────────────────────────────
  const handleConfirmDelete = async () => {
    if (!deleteTarget) return;
    setDeleteLoading(true);
    try {
      const token = getAccessToken();
      await fetch(`${API}/api/v1/users/${deleteTarget.id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setDeleteTarget(null);
      // Nếu page hiện tại không còn data, về page trước
      const remaining = candidates.length - 1;
      const newPage = remaining === 0 && page > 1 ? page - 1 : page;
      fetchCandidates(newPage);
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Danh sách ứng viên</h1>
        <p className="text-sm text-slate-500 mt-1">
          Quản lý tất cả tài khoản ứng viên trong hệ thống
        </p>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-slate-100 overflow-hidden bg-white shadow-sm">
        <Table>
          <TableHeader>
            <TableRow className="bg-slate-50 hover:bg-slate-50">
              <TableHead className="font-semibold text-slate-700 w-14">#</TableHead>
              <TableHead className="font-semibold text-slate-700">Họ tên</TableHead>
              <TableHead className="font-semibold text-slate-700">Email</TableHead>
              <TableHead className="font-semibold text-slate-700">Số điện thoại</TableHead>
              <TableHead className="font-semibold text-slate-700 text-right">Thao tác</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-16">
                  <Loader2 className="size-5 animate-spin mx-auto text-slate-400" />
                </TableCell>
              </TableRow>
            ) : candidates.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-16 text-slate-400">
                  Không có ứng viên nào
                </TableCell>
              </TableRow>
            ) : (
              candidates.map((c, idx) => (
                <TableRow key={c.id} className="hover:bg-slate-50 transition-colors">
                  <TableCell className="text-slate-400 text-sm">
                    {(page - 1) * LIMIT + idx + 1}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="size-8 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-700 flex-shrink-0">
                        {(c.fullName || c.email)[0].toUpperCase()}
                      </div>
                      <span className="font-medium text-slate-900">
                        {c.fullName ?? <span className="text-slate-400 italic">Chưa cập nhật</span>}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-600 text-sm">{c.email}</TableCell>
                  <TableCell>
                    {c.phone
                      ? <span className="text-slate-700">{c.phone}</span>
                      : <Badge variant="secondary" className="text-xs">Chưa có</Badge>
                    }
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center gap-2 justify-end">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => openEdit(c)}
                        className="text-slate-500 hover:text-primary-600 hover:bg-primary-50"
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setDeleteTarget(c)}
                        className="text-slate-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-slate-500">
            Hiển thị {(page - 1) * LIMIT + 1}–{Math.min(page * LIMIT, total)} / {total} ứng viên
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchCandidates(page - 1)}
              disabled={page <= 1}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <div className="flex items-center gap-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 1)
                .reduce<(number | "...")[]>((acc, p, idx, arr) => {
                  if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push("...");
                  acc.push(p);
                  return acc;
                }, [])
                .map((p, idx) =>
                  p === "..." ? (
                    <span key={`ellipsis-${idx}`} className="px-2 text-slate-400 text-sm">…</span>
                  ) : (
                    <Button
                      key={p}
                      variant={p === page ? "default" : "outline"}
                      size="sm"
                      className="w-9 h-9"
                      onClick={() => fetchCandidates(p as number)}
                    >
                      {p}
                    </Button>
                  )
                )
              }
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => fetchCandidates(page + 1)}
              disabled={page >= totalPages}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Edit Dialog */}
      <Dialog open={!!editTarget} onOpenChange={(open) => !open && setEditTarget(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Chỉnh sửa ứng viên</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-name">Họ và tên</Label>
              <Input
                id="edit-name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                placeholder="Nguyễn Văn A"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-phone">Số điện thoại</Label>
              <Input
                id="edit-phone"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                placeholder="0912 345 678"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditTarget(null)}>Huỷ</Button>
            <Button onClick={handleSaveEdit} disabled={editSaving}>
              {editSaving && <Loader2 className="size-4 animate-spin mr-2" />}
              Lưu thay đổi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirm */}
      <AlertDialog open={!!deleteTarget} onOpenChange={(open) => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Xác nhận xoá</AlertDialogTitle>
            <AlertDialogDescription>
              Bạn có chắc muốn xoá ứng viên{" "}
              <span className="font-semibold text-slate-900">
                {deleteTarget?.fullName || deleteTarget?.email}
              </span>
              ? Hành động này không thể hoàn tác.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Huỷ</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 hover:bg-red-700"
              onClick={handleConfirmDelete}
              disabled={deleteLoading}
            >
              {deleteLoading && <Loader2 className="size-4 animate-spin mr-2" />}
              Xoá
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
