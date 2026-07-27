import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <main className="bg-background text-foreground font-sans antialiased">
      <Navbar />
      {children}
      <Footer />
      <FloatingActions />
    </main>
  );
}