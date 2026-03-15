---
trigger: always_on
---

FOLDER STRUCTURE

```
mock-interview/
│
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public/marketing pages (Navbar + Footer)
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Homepage
│   │   ├── interviewers/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── pricing/
│   │   ├── booking/
│   │   ├── blog/
│   │   ├── faq/
│   │   └── term/
│   │
│   ├── (dashboard)/              # Authenticated dashboard (Sidebar)
│   │   ├── layout.tsx
│   │   ├── dashboard/
│   │   ├── bookings/
│   │   │   ├── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── interviews/
│   │   ├── feedback/
│   │   └── settings/
│   │
│   ├── api/                      # Next.js Route Handlers
│   │   ├── auth/
│   │   ├── booking/
│   │   ├── interviewer/
│   │   ├── payment/
│   │   └── ai/
│   │
│   ├── layout.tsx                # Root layout
│   └── globals.css
│
│
├── components/                   # React UI components (KHÔNG đặt trong app/)
│   ├── ui/                       # shadcn/ui — KHÔNG tự tạo thêm vào đây
│   ├── layout/                   # Navbar, Footer, Sidebar — KHÔNG tạo thêm
│   ├── shared/                   # Components dùng chung public + dashboard
│   └── public/                   # Components riêng cho từng public route
│       ├── homepage/
│       ├── interviewers/
│       ├── booking/
│       └── ...
│
│
├── features/                     # Business logic theo domain
│   │                             # Mỗi feature: components/, hooks/, services/, types.ts
│   ├── auth/
│   ├── booking/
│   ├── interviewer/
│   ├── interview/
│   ├── feedback/
│   ├── payment/
│   └── settings/
│
│
├── hooks/                        # Global shared hooks (dùng ở nhiều feature)
│   └── useDebounce.ts
│
│
├── services/                     # Global API service functions
│   ├── booking.service.ts
│   ├── interviewer.service.ts
│   ├── payment.service.ts
│   └── ai.service.ts
│
│
├── types/                        # Shared TypeScript types dùng chung toàn project
│   ├── user.ts
│   ├── api.ts
│   └── pagination.ts
│
│
├── constants/                    # Constant values, enums
│   ├── booking-status.ts
│   └── interview-type.ts
│
│
├── utils/                        # Pure utility/helper functions
│   ├── formatDate.ts
│   ├── formatPrice.ts
│   └── validators.ts
│
│
├── lib/                          # Third-party client initialization
│   ├── utils.ts                  # cn() và shadcn utilities
│   ├── auth.ts
│   ├── stripe.ts
│   └── openai.ts
│
│
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── illustrations/
│
│
├── middleware.ts                  # Next.js middleware (auth guard, redirects)
├── env.ts                        # Type-safe environment variables
├── tailwind.config.ts
├── next.config.ts
└── components.json
```

PLACEMENT RULES

COMPONENTS
- Page-specific UI → components/public/<route-name>/
- Dùng chung public + dashboard → components/shared/
- shadcn/ui base → components/ui/ (không tự thêm)
- Layout shells → components/layout/ (không tạo thêm)

FEATURES
- Mỗi feature folder gồm: components/, hooks/, services/, types.ts
  - components/ — UI riêng của feature
  - hooks/ — client-side data fetching hooks
  - services/ — hàm gọi API của feature
  - types.ts — TypeScript types riêng của feature

HOOKS vs SERVICES
- hooks/ — dành cho Client Component (thường dùng với SWR/React Query)
- services/ — hàm async thuần, dùng trong Server Component hoặc Route Handler

TYPES
- Type riêng 1 feature → features/<feature>/types.ts
- Type dùng chung nhiều feature → types/

UTILS vs LIB
- utils/ — pure functions không có external dependency (format, validate, transform)
- lib/ — khởi tạo third-party client (stripe, openai, db, auth)

CONSTANTS
- Enum, status, config tĩnh không thay đổi → constants/
