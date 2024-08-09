import { BackgroundImage } from "./_components/background-image";
import { Navbar } from "./_components/navbar";
import { Footer } from "./_components/footer";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
