"use client";

import { useSession } from "@/lib/auth-client";
import { Bell, Search } from "lucide-react";
import { useDashboardData } from "@/hooks/services/useDashboardData";

import StatsGrid from "./_components/stat-card";
import RecentPropertiesCard from "./_components/recent-properties-card";
import TodayScheduleCard from "./_components/today-schedule-card";

import {
  Home,
  Building2,
  Users,
  DollarSign,
} from "lucide-react";
import Loading from "./_components/loading";

export const iconMap = {
  Home,
  Building2,
  Users,
  DollarSign,
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const { data, isLoading } = useDashboardData();

  if (isLoading) {
    return <Loading />;
  }

  const stats = data!.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon as keyof typeof iconMap],
  }));

  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-hidden">
      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8">
        <StatsGrid stats={stats} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentPropertiesCard properties={data!.recentProperties} />
          <TodayScheduleCard schedule={data!.todaysSchedule} />
        </div>
        {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentPropertiesCard properties={data!.recentProperties} />
          <TodayScheduleCard schedule={data!.todaysSchedule} />
        </div>
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <RecentPropertiesCard properties={data!.recentProperties} />
          <TodayScheduleCard schedule={data!.todaysSchedule} />
        </div> */}
      </div>
    </div>
  );
}