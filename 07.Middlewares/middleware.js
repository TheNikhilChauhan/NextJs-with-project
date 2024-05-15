import { NextResponse } from "next/server";

export function middleware(request) {
  if (request.nextUrl.pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.json({ success: "successfully ran" });
}

export const config = {
  matcher: ["/userslist/:path*"],
};
