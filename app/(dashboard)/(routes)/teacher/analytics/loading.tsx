import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const Analyticloading = () => {
  return (
    <div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Skeleton className="h-[95px] rounded-2xl" />
          <Skeleton className=" h-[95px] rounded-2xl" />
        </div>
        <Skeleton className="w-full h-[400px] rounded-2xl" />
      </div>
    </div>
  );
};

export default Analyticloading;
