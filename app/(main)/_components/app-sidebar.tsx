"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Role, hasPermission } from "@/lib/rbac";
import { DASHBOARD_PAGES } from "./pages-permissions";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

export default function AppSidebar({ session }: { session: any }) {
  const pathname = usePathname();
  const { state } = useSidebar();
  const role = session?.user?.role as Role;

  const allowedPages = DASHBOARD_PAGES.filter((page) =>
    hasPermission(role, page.permission)
  );

  const isCollapsed = state === "collapsed";

  return (
    <Sidebar collapsible="icon" className="border-r bg-sidebar">
      {/* Header */}
      <SidebarHeader className={cn("border-b", isCollapsed && "border-none")}>
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center transition-all duration-200",
            isCollapsed ? "justify-center p-3" : "gap-3 px-4 py-5"
          )}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-xl shadow-sm">
            A
          </div>

          {!isCollapsed && (
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg tracking-tight">AawasHub</span>
              <span className="text-xs text-muted-foreground/80 capitalize mt-0.5">
                {role}
              </span>
            </div>
          )}
        </Link>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          {!isCollapsed && (
            <SidebarGroupLabel className="px-4 pt-4 pb-2 text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider">
              Navigation
            </SidebarGroupLabel>
          )}

          <SidebarGroupContent>
            <SidebarMenu>
              {allowedPages.map((page) => {
                const isActive =
                  pathname === page.href ||
                  pathname.startsWith(`${page.href}/`);
                const Icon = page.icons;

                return (
                  <SidebarMenuItem key={page.href}>
                    <SidebarMenuButton
                      isActive={isActive}
                      tooltip={isCollapsed ? page.title : undefined}
                      className={cn(
                        "hover:bg-transparent active:bg-transparent p-0 border-none",
                        isCollapsed && "justify-center"
                      )}
                    >
                      <Link
                        href={page.href}
                        className={cn(
                          "flex items-center w-full transition-all duration-200 rounded-lg",
                          isCollapsed
                            ? "justify-center p-3 mx-1.5 my-0.5"
                            : "gap-6 px-4 py-3 mx-2 my-0.5",
                          isActive
                            ? "bg-primary/10 text-primary font-medium shadow-sm"
                            : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
                        )}
                      >
                        <Icon className="h-6 w-6 shrink-0" />
                        {!isCollapsed && (
                          <span className="truncate text-[10px] font-medium">
                            {page.title}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t mt-auto">
        {!isCollapsed && (
          <div className="px-4 py-4 text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} AawasHub
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
