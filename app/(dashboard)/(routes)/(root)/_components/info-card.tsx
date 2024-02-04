import { LucideIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { IconBadge } from "@/components/icon-badge";

interface InfoCardProps {
  numberOfItems: number;
  variant?: "default" | "success";
  label: string;
  icon: LucideIcon;
}

export const InfoCard = ({
  variant,
  icon: Icon,
  numberOfItems,
  label,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p className="text-gray-500 text-sm">
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};

export function InfoCardSekeleton() {
  return (
    <div className="rounded-md flex items-center gap-x-2 p-3 border">
      <Skeleton className="w-12 h-12 rounded-full bg-slate-500/20" />
      <div className="space-y-2">
        <Skeleton className="h-7 w-[300px] rounded-md bg-slate-500/20" />
        <Skeleton className="h-7 w-[200px] rounded-md bg-slate-500/20" />
      </div>
    </div>
  );
}
