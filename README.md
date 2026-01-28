# meetNXT ⚡️

**The future of video conferencing is not just connected—it's seamless, secure, and built for the next generation.**

meetNXT isn't just another Zoom clone. It is a high-performance, real-time video workspace engineered with the bleeding-edge power of **Next.js 14**. We stripped away the bloat and focused on what matters: crystal-clear video, instant connectivity, and an interface that feels like magic.

![meetNXT Dashboard](/public/icons/yoom-logo.svg)

## 🚀 The Stack (Bleeding Edge Only)

Built with the absolute best tools in the ecosystem. No legacy code. No compromises.

-   **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Server Actions)
-   **Language**: [TypeScript](https://www.typescriptlang.org/) (Type-safe everything)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/) (Pixel-perfect design)
-   **Auth**: [Clerk](https://clerk.com/) (Enterprise-grade security)
-   **Real-time Engine**: [Stream](https://getstream.io/) (Low-latency video & audio)

## 🔥 Features that Ship

-   **Instant Meetings**: Create a room and share the link. Seconds, not minutes.
-   **Secure Authentication**: Social login, email verification, and role-based access control out of the box.
-   **Crystal Clear Audio/Video**: Powered by Stream's global edge network.
-   **Personal Meeting Rooms**: Your own dedicated space for recurring syncs.
-   **Responsive Design**: flawless experience on desktop, tablet, and mobile.
-   **Recordings**: Never miss a detail. Save meetings for later review.

## 🛠️ Getting Started

You want to run this locally? Let's go.

### 1. Clone the repo
```bash
git clone https://github.com/thisistanishq/meetNXT.git
cd meetNXT
```

### 2. Install dependencies
```bash
npm install
```

### 3. Environment Setup
You need the keys. Create a `.env` file and add your credentials:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_STREAM_API_KEY=...
STREAM_SECRET_KEY=...
```

### 4. Ignite
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) and witness the speed.

## 🤝 Contributing

Got an idea? Found a bug? Fork it. Fix it. PR it.
We build in public.

## 📄 License

MIT. Build something awesome.
