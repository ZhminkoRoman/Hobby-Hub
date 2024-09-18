import { auth } from "@/auth";

export default auth((req, res) => {
  // if (!req.auth && req.nextUrl.pathname !== "/login") {
  //   const newUrl = new URL("/login", req.nextUrl.origin)
  //   return Response.redirect(newUrl)
  // }
});

export const config = {
  matcher: ["/:path*", "/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
