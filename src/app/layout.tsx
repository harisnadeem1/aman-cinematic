import "./globals.css";
import Providers from "@/components/layout/Providers";

export const metadata = {
  title: "Our Story",
  description: "A cinematic love story",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}