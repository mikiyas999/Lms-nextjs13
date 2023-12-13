import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { courseId: string } }
) {
  try {
    const { userId } = auth();
    const { url } = await req.json();

    if (!userId) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    const courseOwner = await db.course.findUnique({
      where: { id: params.courseId, userId },
    });

    if (!courseOwner) {
      return new NextResponse("UnAuthorized", { status: 401 });
    }

    const attachments = await db.attachment.create({
      data: {
        url,
        courseId: params.courseId,
        name: url.split("/").pop(),
      },
    });
    return NextResponse.json(attachments);
  } catch (error) {
    console.log("ATTACHMENT_CREATION", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
