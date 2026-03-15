---
trigger: always_on
---

FILE AND CODE ORGANIZATION

PROJECT STRUCTURE
- app/ — Next.js App Router, chứa routes và layouts
- components/ — Tất cả React components (KHÔNG nằm trong app/)
  - components/ui/ — shadcn/ui base components (Button, Avatar, Badge,...). Không tự tạo component mới vào đây
  - components/layout/ — Navbar, Footer, Sidebar. Không tạo thêm layout component mới vào đây
  - components/shared/ — Common components dùng chung cho cả public và dashboard
  - components/public/<route-name>/ — Components riêng cho public routes, tên folder trùng với tên route
- features/ — Business logic, hooks, và components phức tạp theo feature domain
- lib/ — Utility functions

COMPONENT NAMING
- File component dùng PascalCase: InterviewerCard.tsx
- Folder dùng kebab-case: interviewer-card/

COMPONENT PLACEMENT RULES
- Page-specific component → đặt vào components/public/<route-name>/ (ví dụ: route interviewers → components/public/interviewers/)
- Component dùng chung public + dashboard → đặt vào components/shared/
- Nếu màn hình dùng Button, Avatar, Badge,... → import từ components/ui/, không tự tạo lại

SERVER vs CLIENT COMPONENT
- Mặc định là Server Component (không thêm "use client")
- Chỉ thêm "use client" khi cần: useState, useEffect, event handlers, hoặc browser APIs
- Đẩy "use client" xuống sâu nhất có thể trong cây component

LAYOUT
- Dùng layout có sẵn: Navbar, Footer (public), Sidebar (dashboard)
- Không tạo thêm layout component mới

ICONS
- Dùng lucide-react cho tất cả icons, không dùng thư viện icon khác

COLOR
- Dùng color token từ tailwind.config.ts: primary-{shade}, secondary, neutral-landing
- Không dùng màu tùy tiện hoặc arbitrary value như text-[#2F7F33]