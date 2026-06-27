import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}