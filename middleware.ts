import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get("currentUser")?.value;

  // if (currentUser && !request.nextUrl.pathname.startsWith("/dashboard")) {
  //   return Response.redirect(new URL("/dashboard", request.url));
  // }

  // if (!currentUser && !request.nextUrl.pathname.startsWith("/auth/login")) {
  //   return Response.redirect(new URL("/auth/login", request.url));
  // }
}

export const config = {
  matcher: [
    // "/dashboard/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
