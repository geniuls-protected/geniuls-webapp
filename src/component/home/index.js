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


export default function HomePage() {
    return (
      <>
        <Navbar/>
        <Intro/>
        <div style={{paddingTop:'160px'}}/>
        <Stats/>
        <div style={{paddingTop:'100px'}}/>
        <HowItWorks/>
        <div style={{paddingTop:'100px'}}/>
        <WhyGeniuls/>
        <div style={{paddingTop:'80px'}}/>
        <OurUSP/>
        <div style={{paddingTop:'100px'}}/>
        <Companies/>
        <div style={{paddingTop:'100px'}}/>
        <FAQ/>
        <div style={{paddingTop:'100px'}}/>
        <Footer/>
      </>
    )
  }