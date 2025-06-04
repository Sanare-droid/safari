import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  // Ensure that all routes are protected by default
  // publicRoutes are routes that do not require authentication
  publicRoutes: [
    "/",
    "/workshops",
    "/workshops/(.*)", // Allows access to /workshops/anything
    "/sign-in",
    "/sign-in/(.*)",
    "/sign-up",
    "/sign-up/(.*)",
    "/api/webhooks/stripe", // Stripe webhook must be public
    "/api/checkout_sessions", // For creating checkout sessions, might be initiated by non-logged-in users
    "/booking/success",
    "/booking/cancel",
    "/test-page",
    // Add any other public static assets or specific routes if needed
    // e.g., "/images/poured-petals-logo.png" if it's not handled by _next/static
  ],
  // ignoredRoutes are routes that Clerk will completely skip processing for,
  // including authentication. Useful for truly static assets or specific API routes
  // that handle their own auth or are meant to be wide open.
  // For now, let's not ignore any routes that might need some form of Next.js processing
  // unless specifically identified.
  // ignoredRoutes: ["/api/some_unprotected_route"],
});

export const config = {
  // The following matcher runs middleware on all routes
  // except static assets and _next routes.
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
