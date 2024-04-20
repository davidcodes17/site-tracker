import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = new URL(request.url).pathname;
  console.log(">", request.url);
  if (pathname.includes("/api/admin") && pathname != "/api/admin/login") {
    // check token
  }
}

export const config = {
  matcher: "/api/:path*",
};
