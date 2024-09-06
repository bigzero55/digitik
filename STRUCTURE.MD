ROOT/
│
├── app/
│ ├── dashboard/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ └── components/
│ │ ├── Navbar.tsx
│ │ ├── Sidebar.tsx
│ │ └── EventCard.tsx
│ │
│ ├── events/
│ │ ├── page.tsx
│ │ ├── [eventId]/
│ │ │ └── page.tsx
│ │ └── register/
│ │ └── page.tsx
│ │
│ ├── sessions/
│ │ ├── page.tsx
│ │ └── [sessionId]/
│ │ └── page.tsx
│ │
│ ├── api/
│ │ ├── participants.ts
│ │ ├── events.ts
│ │ ├── reservations.ts
│ │ └── payments.ts
│ │
│ ├── globals.css
│ └── layout.tsx
│
├── components/
│ ├── FormInput.tsx
│ ├── Button.tsx
│ ├── Table.tsx
│ └── Modal.tsx
│
├── hooks/
│ └── useFetch.ts
│
├── types/
│ ├── events.ts
│ ├── participants.ts
│ └── sessions.ts
│
├── utils/
│ ├── apiHelpers.ts
│ └── formValidation.ts
│
├── public/
├── .env.local
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── next.config.js
└── package.json
