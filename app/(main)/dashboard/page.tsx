"use client";

import { useSession } from "@/lib/auth-client";

export default function DashboardPage() {
  const { data: session } = useSession();

  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="text-muted-foreground mt-2">
        Welcome back, {session?.user.name}
      </p>
    </div>
  );
}
