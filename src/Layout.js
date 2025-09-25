import Footer from "@/components/app/landing/Footer";
import NavHeader from "@/components/app/landing/nav/NavHeader";

export default function Layout({ children }) {
  return (
    <>
      <NavHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
