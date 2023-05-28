import Nav from "./components/nav";
import "styles/globals.scss";
import Footer from "./footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
