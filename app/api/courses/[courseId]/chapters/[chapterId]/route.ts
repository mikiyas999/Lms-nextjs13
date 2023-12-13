import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextURL } from "next/dist/server/web/next-url";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { chapterId: string; courseId: string } }
) {
  try {
    const { userId } = auth();

    const { isPublished, ...value } = await req.json();

    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    const isCourseOwner = await db.course.findUnique({
      where: {
        id: params.courseId,
        userId,
      },
    });

    if (!isCourseOwner) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    const chapter = await db.chapter.update({
      where: {
        id: params.chapterId,
      },
      data: {
        ...value,
      },
    });

    return NextResponse.json(chapter);
  } catch (error) {
    console.log("CHAPTER_ID_UPDATED", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
