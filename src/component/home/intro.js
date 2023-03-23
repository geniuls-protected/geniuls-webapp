import test from '../../images/test.png'
import Image from 'next/image'
import scribble from '../../images/scribble.png'
import { VerticalAnimation } from './animations/vertical-animation.component.js/vertical-animation.component'
import Carousal from './intro-carousal'

import { BrowserView, MobileView } from 'react-device-detect'

export default function Intro() {
  return (
    <>
      <div class="container" style={{ padding: '90px 0 45px 0px' }}>
        <div class="row" style={{ marginBottom: '110px', marginLeft: '10px' }}>
          <div class="col-5 intro-mbl">
            <BrowserView><div><VerticalAnimation /></div></BrowserView>
            <MobileView><div style={{ marginRight: '40px' }}><Image src={test} alt='catalog image' className='catalog-img' /></div></MobileView>
            <BrowserView><p class='geniuls-desc'>Outcome driven initiative.<br />Unique <span class='main-points'>Industry-Oriented Curriculum</span><br />Designed for you by <span class='main-point'>Expert Mentors.<Image src={scribble} className='scribb' /> </span></p></BrowserView>
            <MobileView><p class='geniuls-desc'><span class='main-points'>Outcome driven initiative.<br /></span><span class='simple-text'>Unique Industry-Oriented Curriculum <br /></span><span class='simple-text'>Designed for you by</span><span class='main-points'><br />Expert Mentors  </span></p> </MobileView>

            <a href="https://98arnb8wb3v.typeform.com/to/FQMpjsm8" target='_blank' rel="noreferrer"><button class="enrollButton get-started">Get Started</button></a>
          </div>
          {/* <div class="col-11">

            <Image  src="Divya.jpeg"  alt=""  width={300} height={400} / >

          </div> */}
          <div class= 'col-9'>
            <div className="box" ><span><h5>Name Surname ,</h5><i><b>50 LPA</b></i><span>⭐⭐⭐⭐⭐</span></span><br></br>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi quisquam officia vel fugit porro molestias deleniti quod. Repellat, debitis iure? Voluptatum distinctio voluptatem eos, dicta placeat explicabo vel aliquam deleniti.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}   
