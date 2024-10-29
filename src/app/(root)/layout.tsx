import Navbar from "@/components/shared/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}