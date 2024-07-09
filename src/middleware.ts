import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  // const { isAuthenticated } = getKindeServerSession();
  // if (!(await isAuthenticated())) {
  //   return NextResponse.redirect(new URL("/auth/login", req.url));
  // }
  // return withAuth(req);
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
