import { NextApiRequest, NextApiResponse } from "next";
import db from "@/app/config/db";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    // const token = req.headers.get("authorization")
    // console.log(token)
    // if (!token) {
    //   return NextResponse.json({ msg: "Invalid Token" }, { status: 400 });
    // }

    // const [_ ,tk] = token.split(" ")

    // const decode = jwt.verify(tk, process.env.JWT_SECRET!);
    // const u = await db.user.findUnique({
    //   where: {
    //     //@ts-expect-error
    //     uuid: decode.id,
    //     role: 0,
    //   },
    // });
    // if (!u) {
    //   return NextResponse.json({ msg: "Invalid Token" }, { status: 404 });
    // }

    const locations = await db.locations.findMany({});
    return NextResponse.json(
      { msg: "Fetched Locations", data: locations },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Server" }, { status: 404 });
  }
};

