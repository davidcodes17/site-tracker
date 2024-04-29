import { NextApiRequest } from "next";
import db from "@/app/config/db";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const getLocation = async (req: NextApiRequest) => {
  try {
    const token = req.cookies["token"]; // or req.headers['authorization']
    if (!token) {
      return NextResponse.json({ status: 404, msg: "Invalid Token" });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET!);
    const u = await db.user.findUnique({
      where: {
        //@ts-expect-error
        uuid: decode.id,
        role: 0,
      },
    });
    if (!u) {
      return NextResponse.json({ status: 404, msg: "Invalid Token" });
    }

    const locations = await db.locations.findMany({});
    return NextResponse.json({
      status: 200,
      msg: "Fetched Locations",
      data: locations,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 404, msg: "Internal Server Error" });
  }
};

export default getLocation;
