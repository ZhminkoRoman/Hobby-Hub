import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/auth/login") {
    const newUrl = new URL("/auth/login", req.nextUrl.origin);
    return Response.redirect(newUrl);
  }
  if (req.auth && req.nextUrl.pathname.includes("/auth/login")) {
    return Response.redirect("/dashboard");
  }
});

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/((?!api|_next/static|_next/image|.*\\.png$).*)",
  ],
};
