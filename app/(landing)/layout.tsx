import { BackgroundImage } from "./_components/background-image";

interface LandingLayoutProps {
  children: React.ReactNode;
}

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <>
      <BackgroundImage />
      {/* <Navbar /> */}
      {children}
    </>
  );
};

export default LandingLayout;
