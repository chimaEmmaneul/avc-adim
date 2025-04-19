import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPaths = [
  "/overview",
  "/user-management",
  "/transactions",
  "/settings",
];

const publicPaths = [
  "/auth/login",
  "/auth/forgot-password",
  "/auth/reset-password",
  "/auth/verifyotp",
  "/",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the path should be protected
  const isPathProtected = protectedPaths.some((path) =>
    pathname.startsWith(path)
  );

  // Skip middleware for public paths
  const isPublicPath = publicPaths.includes(pathname);

  if (!isPathProtected || isPublicPath) {
    return NextResponse.next();
  }

  // Check for the authentication cookie
  const token = request.cookies.get("token");

  // If no auth cookie exists, redirect to login
  if (!token) {
    const loginUrl = new URL("/auth/login", request.url);
    // Save the URL they tried to visit
    // loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If there is a cookie, let the request proceed
  return NextResponse.next();
}

// Configure which paths the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!_next/static|_next/image|favicon.ico|public/).*)",
  ],
};
