import { IconBadge } from "@/components/icon-badge";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { ArrowLeft, Eye, LayoutDashboard, Video } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ChapterTitleForm } from "./_components/chapter-title-form";
import { ChapterDescriptionForm } from "./_components/chapter-description-form";
import { ChapterAccessForm } from "./_components/chapter-access-form";
import { ChapterVideoForm } from "./_components/chapter-video-form";
import { Banner } from "@/components/banner";
import { ChapterActions } from "./_components/chapter-action";

const ChapterIdPage = async ({
  params,
}: {
  params: { chapterId: string; courseId: string };
}) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/");
  }

  const chapter = await db.chapter.findUnique({
    where: {
      id: params.chapterId,
      courseId: params.courseId,
    },
    include: {
      muxData: true,
    },
  });
  console.log(chapter);
  if (!chapter) {
    redirect("/");
  }

  const requierdFields = [chapter.title, chapter.description, chapter.videoUrl];
  const totalFields = requierdFields.length;
  const completedFields = requierdFields.filter(Boolean).length;
  const completionText = `(${completedFields}/${totalFields})`;

  const isComplete = requierdFields.every(Boolean);
  return (
    <>
      {!chapter.isPublished && (
        <Banner
          variant="warning"
          label="This chapter is unpublished , it will not be visible in the course! "
        />
      )}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="w-full">
            <Link
              href={`/teacher/courses/${params.courseId}`}
              className="flex items-center text-sm hover:opacity-75 transition mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to the Course
            </Link>
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col space-y-2">
                <h2 className="text-2xl font-medium">Chapter Creation</h2>
                <span className="text-sm text-slate-700">
                  completion all fields {completionText}
                </span>
              </div>
              <ChapterActions
                chapterId={params.chapterId}
                courseId={params.courseId}
                disabled={!isComplete}
                isPublished={chapter.isPublished}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={LayoutDashboard} />
                <h2 className="text-xl">Customized your chapter</h2>
              </div>
              <ChapterTitleForm
                chapterId={params.chapterId}
                courseId={params.courseId}
                initialData={chapter}
              />
              <ChapterDescriptionForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge icon={Eye} />
                <h2 className="text-xl">Access Setting</h2>
              </div>
              <ChapterAccessForm
                initialData={chapter}
                courseId={params.courseId}
                chapterId={params.chapterId}
              />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge icon={Video} />
              <h2 className="text-xl">Add a video</h2>
            </div>
            <ChapterVideoForm
              initialData={chapter}
              courseId={params.courseId}
              chapterId={params.chapterId}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChapterIdPage;
