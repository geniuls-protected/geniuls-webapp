import test from '../../images/test.png'
import Image from 'next/image'
import { VerticalAnimation } from './animations/vertical-animation.component.js/vertical-animation.component'
import Carousal from './intro-carousal'
import { Typewriter } from 'react-simple-typewriter'
import { BrowserView, MobileView } from 'react-device-detect'

export default function Intro() {
  return (
    <>
        <div class="container" style={{padding: '94px 0 45px 45px'}}>
        <div class="row" style={{marginBottom:'11px', marginLeft:'30px'}}>
            <div class="col-5 intro-mbl">
            <BrowserView><div><VerticalAnimation/></div></BrowserView>
            <MobileView><div style={{marginRight:'40px'}}><Image src={test} alt='catalog image' className='catalog-img'/></div></MobileView>
            {/* <MobileView>
            <div className='horizontal__animation__container typewriter-animate'>
              <Typewriter
                words={['Bag Your Dream Job', 'Bag Your Dream Internship', 'Solidify Your Skills', 'Solidify Your Resume', 'Better Package', 'Better Position']}
                loop={false}
                cursorStyle=''
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // className='typewriter-page'
            />
            </div>
            </MobileView> */}
            <BrowserView><p class='geniuls-desc'>Outcome driven initiative.<br/>Unique <span class='main-points'>industry-oriented curriculum</span><br/>designed for you by <span class='main-points'>Expert mentors.</span></p></BrowserView>
            <MobileView><p class='geniuls-desc'><span class='main-points'>Outcome driven initiative.<br/></span><span class='simple-text'>Unique industry-oriented curriculum <br/></span><span class='simple-text'>designed for you by</span><span class='main-points'><br/>Expert mentors.</span></p></MobileView>
            <a href="https://98arnb8wb3v.typeform.com/to/FQMpjsm8" target='_blank' rel="noreferrer"><button class="enrollButton get-started">Get Started</button></a>
            </div>
            <div class="col-7">
            {/* <div style={{marginRight:'40px'}}><Image src={test} alt='catalog image' className='catalog-img'/></div> */}
            <BrowserView><Carousal/></BrowserView>
            </div>
        </div>
        </div>
    </>
  )
}   
