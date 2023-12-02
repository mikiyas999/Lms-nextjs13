import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const { title } = await req.json();
    console.log(title, userId);
    if (!userId) {
      return new Response("Unauthorized", { status: 401 });
    }

    const course = await db.course.create({
      data: {
        title,
        userId,
      },
    });
    return NextResponse.json(course);
  } catch (error) {
    console.log("[COURSES] ", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
}
