import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function SiteLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-4 py-8">{children}</main>
      <Footer />
    </div>
  );
}
