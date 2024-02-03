"use client";

import {
  Layout,
  Compass,
  List,
  BarChart,
  Trophy,
  Mail,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { SidebarItem } from "./side-bar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
  {
    icon: Trophy,
    label: "Leaderboard",
    href: "/teacher/leaderboard",
  },
  {
    icon: Mail,
    label: "Newsletter",
    href: "/teacher/newsletter",
  },
  {
    icon: GraduationCap,
    label: "Mentorship",
    href: "/teacher/mentorship",
  },
  {
    icon: MessageCircle,
    label: "Go to group chat",
    href: "/teacher/chat",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
];

export const SidebarRoutes = () => {
  const pathname = usePathname();
  const isTeacherPage = pathname?.includes("/teacher");

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
