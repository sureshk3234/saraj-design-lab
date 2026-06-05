import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  ScriptOnce,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ThemeProvider } from "../lib/theme";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { AuroraBackground } from "../components/effects/AuroraBackground";
import { Scene3D } from "../components/effects/Scene3D";
import { ScrollProgress } from "../components/effects/ScrollProgress";
import { CustomCursor } from "../components/effects/CustomCursor";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Error 404</p>
        <h1 className="mt-4 font-display text-7xl text-gradient">Lost the thread.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has moved. Head back home and pick up where you left off.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] px-5 py-2.5 text-sm font-medium text-[color:var(--primary-foreground)]"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. Try refreshing or head home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-gradient-to-r from-[color:var(--blush)] to-[color:var(--rose)] px-5 py-2.5 text-sm font-medium text-[color:var(--primary-foreground)]"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-[color:var(--border)] px-5 py-2.5 text-sm">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Sara Johnson — Creative Freelancer" },
      { name: "description", content: "Design, writing & motion from Karachi. Portfolio of Sara Johnson — UI/UX, web design, branding, manuscript writing and video editing." },
      { name: "author", content: "Sara Johnson" },
      { property: "og:site_name", content: "Sara Johnson" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Sara Johnson — Creative Freelancer" },
      { property: "og:description", content: "Design, writing & motion from Karachi. Portfolio of Sara Johnson — UI/UX, web design, branding, manuscript writing and video editing." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Sara Johnson — Creative Freelancer" },
      { name: "twitter:description", content: "Design, writing & motion from Karachi. Portfolio of Sara Johnson — UI/UX, web design, branding, manuscript writing and video editing." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22d0490b-2ffd-435e-b155-09c537946fd5/id-preview-25ee44fe--12266e9b-1f58-417f-8225-10070fb4d47f.lovable.app-1780659277346.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/22d0490b-2ffd-435e-b155-09c537946fd5/id-preview-25ee44fe--12266e9b-1f58-417f-8225-10070fb4d47f.lovable.app-1780659277346.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Sara Johnson",
          jobTitle: "Creative Freelancer",
          address: { "@type": "PostalAddress", addressLocality: "Karachi", addressCountry: "PK" },
          email: "saraahjohnson0345@gmail.com",
          telephone: "+92 318 8272667",
          url: "https://saraahjohnson.vercel.app",
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'dark';if(t==='dark')document.documentElement.classList.add('dark');}catch(e){document.documentElement.classList.add('dark');}})();`;

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ScriptOnce>{themeScript}</ScriptOnce>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuroraBackground />
        <Scene3D />
        <ScrollProgress />
        <CustomCursor />
        <Nav />
        <main className="relative">
          <Outlet />
        </main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            className: "glass-strong !border !border-[color:var(--border)] !text-foreground",
          }}
        />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
