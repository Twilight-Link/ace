import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection";
import WhyAceSection from "./homepage/WhyAceSection";
import Industries from "./homepage/Industries";
import CourcesList from "./homepage/CourceSection";
import Principal from "./homepage/Principal";
import HallOfFame from "./halloffame/halloffame";
export default function Home() {
  return (<div className="select-none">
    <NavBar />
    <HeroSection />
    <WhyAceSection />
    <CourcesList/>
    <HallOfFame/>
    <Industries/>
    <Principal/>
    <Footer />

  </div>
  );
}
