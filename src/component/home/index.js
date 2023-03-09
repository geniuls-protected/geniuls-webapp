import HowItWorks from "./howItWorks";
import Intro from "./intro";
import Navbar from "./navbar";
import Stats from "./stats";
import OurUSP from "./ourUSP";
import WhyGeniuls from "./whyGeniuls";
import Companies from "./comapnies";

import brake from '../../images/brake.svg';
import Image from "next/image";
import FAQ from "./fag";
import Footer from "./footer";
import Carousal from "./intro-carousal";
import { MobileView } from "react-device-detect";



export default function HomePage() {
    return (
      <div>
        <Navbar className="main-style"/>
        <Intro className="main-style"/>
        {/* <div style={{paddingTop:'80px'}}/> */}
        <Stats className="main-style"/>
        {/* <div style={{paddingTop:'100px'}}/> */}
        {/* <MobileView><Carousal/></MobileView> */}
        <div style={{paddingTop:'20px'}}/>
        <HowItWorks className="main-style"/>
        <div style={{paddingTop:'100px'}}/>
        <WhyGeniuls className="main-style"/>
        <div style={{paddingTop:'80px'}}/>
        <OurUSP/>
        <div style={{paddingTop:'100px'}}/>
        <Companies/>
        {/* <div style={{paddingTop:'100px'}}/> */}
        <FAQ className="main-style"/>
        {/* <div style={{paddingTop:'100px'}}/> */}
        <Footer/>
      </div>
    )
  }