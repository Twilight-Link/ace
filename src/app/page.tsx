import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection";
import WhyAceSection from "./homepage/WhyAceSection";
import Industries from "./Industries/Industries";
export default function Home() {
  return (<div>
    <NavBar />
    <HeroSection />
    <WhyAceSection />
 
    <Industries/>
    <Footer />

  </div>
  );
}
