import db from "@/app/config/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    await db.locations.create({
      data: body,
    });

    return NextResponse.json({ msg: "Saved" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
};
