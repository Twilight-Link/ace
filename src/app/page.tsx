import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection";
import WhyAceSection from "./homepage/WhyAceSection";
import Industries from "./Industries/Industries";
import CourcesList from "./homepage/CourceSection";
export default function Home() {
  return (<div className="select-none">
    <NavBar />
    <HeroSection />
    <WhyAceSection />
    <CourcesList/>
 
    <Industries/>
    <Footer />

  </div>
  );
}
