// app/(dashboard)/layout.tsx
"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "./_components/app-sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session, isPending } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) router.replace("/login");
  }, [session, isPending, router]);

  if (isPending || !session) return null;

  return (
    <SidebarProvider defaultOpen={true}>
      {" "}
      {/* or false */}
      <div className="group flex min-h-screen">
        <AppSidebar session={session} />
        <main className="flex-1 p-6 md:p-8 peer-data-[state=collapsed]:md:ml-[--sidebar-width-icon] peer-data-[state=expanded]:md:ml-[--sidebar-width]">
          <SidebarTrigger className="mb-4" />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
