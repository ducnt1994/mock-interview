import Navbar from "@/components/layout/Navbar";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-landing">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
