import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection";
import WhyAceSection from "./homepage/WhyAceSection";
export default function Home() {
  return (<div>
    <NavBar />
    <HeroSection />
    <WhyAceSection />
    {/* <Principal/> */}
    <Footer />

  </div>
  );
}
