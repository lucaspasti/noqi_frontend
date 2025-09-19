"use client";

import { useAuth } from "@/hooks/useAuth";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen">

      {children}
    </div>
  );
}
