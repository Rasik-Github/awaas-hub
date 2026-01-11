// // "use client";

// // import { useSession } from "@/lib/auth-client";
// // import { useRouter, usePathname } from "next/navigation";
// // import { useEffect } from "react";
// // import Link from "next/link";

// // import { Role, hasPermission } from "@/lib/rbac";
// // import { DASHBOARD_PAGES } from "./_components/pages-permissions";

// // import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

// // export default function MainLayout({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   const { data: session, isPending } = useSession();
// //   const router = useRouter();
// //   const pathname = usePathname();

// //   useEffect(() => {
// //     if (!isPending && !session) {
// //       router.replace("/login");
// //     }
// //   }, [session, isPending, router]);

// //   if (isPending || !session) return null;

// //   const role = session.user.role as Role;

// //   const allowedPages = DASHBOARD_PAGES.filter((page) =>
// //     hasPermission(role, page.permission)
// //   );

// //   return (
// //     <div className="flex min-h-screen bg-background">
// //       {/* Sidebar */}
// //       <aside className="w-64 border-r border-border bg-card px-4 py-6">
// //         <div className="mb-8">
// //           <h2 className="text-xl font-bold">Dashboard</h2>
// //           <p className="text-sm text-muted-foreground capitalize">{role}</p>
// //         </div>

// //         <nav className="space-y-1">
// //           {allowedPages.map((page) => {
// //             const isActive = pathname.startsWith(page.href);

// //             return (
// //               <Link
// //                 key={page.href}
// //                 href={page.href}
// //                 className={`block rounded-md px-3 py-2 text-sm transition
// //                   ${
// //                     isActive
// //                       ? "bg-primary text-primary-foreground"
// //                       : "hover:bg-muted"
// //                   }
// //                 `}
// //               >
// //                 <page.icons className="h-5 w-5 text-muted-foreground" />
// //                 <div className="font-medium">{page.title}</div>
// //                 <div className="text-xs text-muted-foreground">
// //                   {page.description}
// //                 </div>
// //               </Link>
// //             );
// //           })}
// //         </nav>
// //       </aside>

// //       {/* Main content */}
// //       <main className="flex-1 p-8">{children}</main>
// //     </div>
// //   );
// // }

// "use client";

// import { useSession } from "@/lib/auth-client";
// import { useRouter } from "next/navigation";
// import { useEffect } from "react";

// import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import AppSidebar from "./_components/app-sidebar";

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { data: session, isPending } = useSession();
//   const router = useRouter();

//   useEffect(() => {
//     if (!isPending && !session) router.replace("/login");
//   }, [session, isPending, router]);

//   if (isPending || !session) return null;

//   return (
//     <SidebarProvider>
//       <AppSidebar session={session} />
//       <main className="flex-1 p-6 md:p-8">
//         <SidebarTrigger className="fixed top-4 left-4 z-50 md:hidden" />
//         {children}
//       </main>
//     </SidebarProvider>
//   );
// }



