import "./globals.css";

export const metadata = {
  title: "project1",
  description: "first project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
