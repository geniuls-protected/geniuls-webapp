import HowItWorks from "./howItWorks";
import Intro from "./intro";
import Navbar from "./navbar";
import Stats from "./stats";
import OurUSP from "./ourUSP";
import WhyGeniuls from "./whyGeniuls";
import Companies from "./comapnies";
import FAQ from "./fag";
import Footer from "./footer";

export default function HomePage() {
    return (
      <div>
        <Navbar className="main-style"/>
        <Intro className="main-style"/>
        <Stats className="main-style"/>
        <div style={{paddingTop:'20px'}}/>
        <HowItWorks className="main-style"/>
        <div style={{paddingTop:'100px'}}/>
        <WhyGeniuls className="main-style"/>
        <div style={{paddingTop:'80px'}}/>
        <OurUSP/>
        <div style={{paddingTop:'100px'}}/>
        <Companies/>
        <FAQ className="main-style"/>
        <Footer/>
      </div>
    )
  }