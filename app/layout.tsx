import PageHeader from "@/components/page-header";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Script from "next/script";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "echo-widget": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "project-id"?: string;
        },
        HTMLElement
      >;
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <Script src="https://echo-widget.vercel.app/widget.umd.js"></Script>
          <echo-widget project-id="1"></echo-widget>
          <PageHeader />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
