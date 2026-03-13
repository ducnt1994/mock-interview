"use client";

import { useState } from "react";
import { User, Mail, Bell, Shield, Camera } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsForm() {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Hồ sơ", icon: User },
    { id: "notifications", label: "Thông báo", icon: Bell },
    { id: "security", label: "Bảo mật", icon: Shield },
  ];

  return (
    <div className="px-4 md:px-8 py-6 md:py-8">
      {/* Page Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Cài đặt</h1>
        <p className="text-sm text-slate-500 mt-1">
          Quản lý thông tin tài khoản và tùy chỉnh trải nghiệm.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-slate-100 p-1 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
              activeTab === tab.id
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <tab.icon className="size-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === "profile" && (
        <div className="flex flex-col gap-5">
          {/* Avatar */}
          <Card className="border-slate-100 shadow-sm">
            <CardContent className="p-5 md:p-6">
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="size-20 rounded-full bg-primary-100 flex items-center justify-center text-2xl font-bold text-primary-700">
                    H
                  </div>
                  <button className="absolute bottom-0 right-0 size-7 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-sm hover:bg-slate-50 transition-colors">
                    <Camera className="size-3.5 text-slate-500" />
                  </button>
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">hyn</p>
                  <p className="text-sm text-slate-500">hyn@email.com</p>
                  <p className="text-xs text-primary-600 font-medium mt-1">
                    Thành viên từ 01/2026
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card className="border-slate-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-slate-900">
                Thông tin cá nhân
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-6 pb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Họ tên
                  </label>
                  <input
                    type="text"
                    defaultValue="Hyn Nguyen"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Email
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      defaultValue="hyn@email.com"
                      className="flex-1 px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                    />
                    <Mail className="size-4 text-slate-400" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Số điện thoại
                  </label>
                  <input
                    type="tel"
                    defaultValue="0901234567"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Lĩnh vực
                  </label>
                  <select className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all">
                    <option>Kỹ thuật phần mềm</option>
                    <option>Thiết kế UX/UI</option>
                    <option>Quản lý sản phẩm</option>
                    <option>Marketing</option>
                    <option>Phân tích dữ liệu</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                  Giới thiệu bản thân
                </label>
                <textarea
                  rows={3}
                  defaultValue="Kỹ sư phần mềm với 3 năm kinh nghiệm, đang tìm kiếm cơ hội tại các công ty tech hàng đầu."
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 resize-none focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                />
              </div>

              <div className="flex justify-end mt-5">
                <Button className="font-semibold rounded-xl px-6">
                  Lưu thay đổi
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === "notifications" && (
        <Card className="border-slate-100 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-slate-900">
              Tùy chỉnh thông báo
            </CardTitle>
          </CardHeader>
          <CardContent className="px-5 md:px-6 pb-6">
            {[
              {
                title: "Xác nhận đặt lịch",
                desc: "Nhận thông báo khi buổi phỏng vấn được xác nhận.",
                enabled: true,
              },
              {
                title: "Nhắc nhở trước buổi phỏng vấn",
                desc: "Nhận nhắc nhở 1 giờ trước khi buổi phỏng vấn bắt đầu.",
                enabled: true,
              },
              {
                title: "Phản hồi mới",
                desc: "Nhận thông báo khi có phản hồi mới từ người phỏng vấn.",
                enabled: true,
              },
              {
                title: "Tin tức & ưu đãi",
                desc: "Nhận thông tin về tính năng mới và chương trình ưu đãi.",
                enabled: false,
              },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between py-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked={item.enabled}
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:rounded-full after:size-4 after:transition-all peer-checked:bg-primary-500" />
                  </label>
                </div>
                {idx < 3 && <Separator />}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Security Tab */}
      {activeTab === "security" && (
        <div className="flex flex-col gap-5">
          <Card className="border-slate-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-slate-900">
                Đổi mật khẩu
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-6 pb-6">
              <div className="flex flex-col gap-4 max-w-md">
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Mật khẩu hiện tại
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Xác nhận mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-300 transition-all"
                  />
                </div>
                <Button className="font-semibold rounded-xl self-start mt-2">
                  Cập nhật mật khẩu
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-red-600">
                Vùng nguy hiểm
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 md:px-6 pb-6">
              <p className="text-sm text-slate-500 mb-4">
                Xóa tài khoản sẽ xóa vĩnh viễn toàn bộ dữ liệu của bạn. Hành
                động này không thể hoàn tác.
              </p>
              <Button
                variant="outline"
                className="text-red-600 border-red-200 hover:bg-red-50 font-semibold rounded-xl"
              >
                Xóa tài khoản
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
