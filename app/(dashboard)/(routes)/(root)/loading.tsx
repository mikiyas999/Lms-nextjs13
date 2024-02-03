import React from "react";
import { InfoCardSekeleton } from "./_components/info-card";
import { CourseSkeletonCard } from "@/components/courses-list";

const PageLoading = () => {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InfoCardSekeleton />
        <InfoCardSekeleton />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <CourseSkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default PageLoading;
