import db from "@/app/config/db";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
// import createAdmin from "@/app/utils/createAdmin";
export const POST = async (req: NextRequest) => {
  try {
    // createAdmin()
    let { email, password } = await req.json();

    // validate body
    if (!email || !password) {
      email = "";
      password = "";
    }

    const checkuser = await db.user.findUnique({
      where: {
        email,
        role: 0,
      },
    });

    if (!checkuser) {
      return NextResponse.json(
        { msg: "Email or Password is Incorrect" },
        { status: 400 }
      );
    }

    const compare_password = bcryptjs.compare(password, checkuser.password);

    if (!compare_password) {
      return NextResponse.json(
        { msg: "Email or Password is Incorrect" },
        { status: 400 }
      );
    }

    // generate token
    const $payload = {
      id: checkuser.uuid,
    };
    const token = jwt.sign($payload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    return NextResponse.json(
      { msg: "Login Successfull", token },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json({ msg: "Internal Server Error" }, { status: 500 });
  }
};
