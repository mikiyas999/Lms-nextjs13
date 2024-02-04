import { CourseSkeletonCard } from "@/components/courses-list";
import React from "react";
import { CategoriesSekelton } from "./_components/categories";

const Searchloading = () => {
  return (
    <>
      <div className="p-6 space-y-4">
        <div>
          <CategoriesSekelton />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8">
          {[...Array(8)].map((_, i) => (
            <CourseSkeletonCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Searchloading;
