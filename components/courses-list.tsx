import { Category, Course } from "@prisma/client";

import { CourseCard } from "@/components/course-card";
import { Skeleton } from "./ui/skeleton";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

interface CoursesListProps {
  items: CourseWithProgressWithCategory[];
}

export const CoursesList = ({ items }: CoursesListProps) => {
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
        {items.map((item) => (
          <CourseCard
            key={item.id}
            id={item.id}
            title={item.title}
            imageUrl={item.imageUrl!}
            chaptersLength={item.chapters.length}
            price={item.price!}
            progress={item.progress}
            category={item?.category?.name!}
          />
        ))}
      </div>
      {items.length === 0 && (
        <div className="text-center text-sm text-muted-foreground mt-10">
          No courses found
        </div>
      )}
    </div>
  );
};

export function CourseSkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[170px] w-[250px] rounded-xl bg-slate-500/20" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px] bg-slate-500/20" />
        <Skeleton className="h-4 w-[200px] bg-slate-500/20" />
        <Skeleton className="h-4 w-[150px] bg-slate-500/20" />
      </div>
    </div>
  );
}
