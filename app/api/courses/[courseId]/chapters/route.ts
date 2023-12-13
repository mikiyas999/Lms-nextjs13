import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { title } = await req.json();

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

    const isLastChapter = await db.chapter.findFirst({
      where: {
        courseId: params.courseId,
      },
      orderBy: { createdAt: "desc" },
    });

    const newChapterPostion = isLastChapter ? isLastChapter.position + 1 : 1;

    const chapter = await db.chapter.create({
      data: {
        title,
        courseId: params.courseId,
        position: newChapterPostion,
      },
    });
    return NextResponse.json(chapter);
  } catch (error) {
    console.log("[chapter-Creation]", error);
    new NextResponse("Internal Error", { status: 500 });
  }
}
