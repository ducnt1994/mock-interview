import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Role = "admin" | "candidate" | "interviewer";

/** Route prefix → danh sách role được phép truy cập */
const ROUTE_RULES: { prefix: string; allowedRoles: Role[] }[] = [
  { prefix: "/admin", allowedRoles: ["admin"] },
  { prefix: "/candidate", allowedRoles: ["admin", "candidate", "interviewer"] },
  { prefix: "/interviewer", allowedRoles: ["admin", "interviewer"] },
];

/** Decode JWT payload (không verify signature — chỉ dùng để đọc roles ở Edge) */
function decodeJwtPayload(token: string): Record<string, unknown> | null {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(Buffer.from(base64, "base64").toString("utf8"));
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const matchedRule = ROUTE_RULES.find(
    (rule) => pathname === rule.prefix || pathname.startsWith(rule.prefix + "/")
  );

  if (!matchedRule) {
    return NextResponse.next();
  }

  const accessToken = request.cookies.get("access_token")?.value;

  // Chưa đăng nhập → về trang chủ
  if (!accessToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const payload = decodeJwtPayload(accessToken);

  // Hỗ trợ cả roles[] (mới) và role string (cũ - fallback)
  const roles = (payload?.roles as Role[] | undefined) ??
    (payload?.role ? [payload.role as Role] : []);

  // Không có role nào match → về trang chủ
  if (!roles.some((r) => matchedRule.allowedRoles.includes(r))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
