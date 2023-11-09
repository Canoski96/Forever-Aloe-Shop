"use client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Forever Aloe</title>
        <meta
          title="description"
          content="Your Online Shop for Healthy Living"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
