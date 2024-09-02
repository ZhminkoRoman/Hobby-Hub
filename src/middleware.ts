import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {}

export const config = {
  matcher: ["/:path*", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
