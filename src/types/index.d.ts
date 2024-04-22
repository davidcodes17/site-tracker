import { User } from "@prisma/client";
import { NextRequest } from "next/server";

export interface _NextRequest extends NextRequest {
  user?: User;
}
