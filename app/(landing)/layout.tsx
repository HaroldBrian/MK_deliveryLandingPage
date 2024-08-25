import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";
import ScrollToTop from "./_components/ScrollToTop";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <Navbar />
      <ScrollToTop />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
