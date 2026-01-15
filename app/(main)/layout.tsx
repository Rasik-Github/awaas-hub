"use client";

import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./_components/app-sidebar";
import DashboardHeader from "./_components/dashboard-header";

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

  const onSearch = () => {
    console.log("f")
  }

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar session={session} />
        <main className=" w-full flex-1 overflow-hidden py-2 md:py-4 peer-data-[state=collapsed]:md:ml-[--sidebar-width-icon] peer-data-[state=expanded]:md:ml-[--sidebar-width]">
          <DashboardHeader onSearch={onSearch} />
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}