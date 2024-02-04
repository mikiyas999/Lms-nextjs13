import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
const Chapterloading = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto pb-20 ">
      <div className="p-4">
        <Skeleton className="aspect-video bg-slate-500/20" />
      </div>
      <div>
        <div className="p-4 flex flex-col md:flex-row items-center justify-between">
          <Skeleton className="w-[200px] h-12 rounded-lg bg-slate-500/20" />
          <Skeleton className="w-[100px] h-12 rounded-lg bg-slate-500/20" />
        </div>
      </div>
      <div className="flex flex-col space-y-4 px-4">
        <Skeleton className="w-full h-5 rounded-2xl bg-slate-500/20" />
        <Skeleton className="w-full h-5 rounded-2xl bg-slate-500/20" />
        <Skeleton className="w-full h-5 rounded-2xl bg-slate-500/20" />
        <Skeleton className="w-full h-5 rounded-2xl bg-slate-500/20" />
        <Skeleton className="w-full h-5 rounded-2xl bg-slate-500/20" />
        <Skeleton className="w-full h-12 p-4 rounded-2xl bg-slate-500/20" />
      </div>
    </div>
  );
};

export default Chapterloading;
