import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("REQ -------", req);

  // if (!req.auth && req.nextUrl.pathname !== "/login") {
  //   const newUrl = new URL("/login", req.nextUrl.origin)
  //   return Response.redirect(newUrl)
  // }
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }
  // return withAuth(req);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
