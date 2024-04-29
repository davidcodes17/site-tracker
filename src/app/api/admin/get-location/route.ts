"use server";
import db from "@/app/config/db";
import { _NextRequest } from "@/types";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' 
export const GET = async (req: _NextRequest) => {
  try {
    const { headers } = req;
    let auth = headers.get("Authorization");
    if (!auth) {
      return NextResponse.json({ msg: "Invalid Token" }, { status: 400 });
    }
    const [bearer, token] = auth.split(" ");

    if (!token) {
      return NextResponse.json({ msg: "Invalid Token" }, { status: 400 });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    const u = await db.user.findUnique({
      where: {
        // @ts-expect-error
        uuid: decode.id,
        role: 0,
      },
    });
    // req.user = u
    // ---------------------------
    const locations = await db.locations.findMany({});

    return NextResponse.json(
      { msg: "Fetched Locations", data: locations },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
};
