"use client";

import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

interface SidebarItemProps {
  icon: any;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarItemProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname?.startsWith(`${href}/`);

  const onClick = () => {
    router.push(href);
  };
  return (
    <button
      onClick={onClick}
      type="button"
      className={cn(
        "flex items-center gap-x-2 pl-6 text-sm text-slate-500 hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:text-sky-700 hover:bg-sky-200/20"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={20}
          className={cn("text-slate-500", isActive && "text-sky-700")}
        />
        {label}
      </div>
      <div
        className={cn(
          "ml-auto h-full border-2 border-sky-700 transition-all opacity-0",
          isActive && "opacity-100"
        )}
      />
    </button>
  );
};
