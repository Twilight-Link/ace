import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import HeroSection from "./homepage/HeroSection";
import Principal from "./Principal/Principal";
export default function Home() {
  return (<div>
    <NavBar />
    <HeroSection/>
    {/* <Principal/> */}
    <Footer/>

  </div>
  );
}
