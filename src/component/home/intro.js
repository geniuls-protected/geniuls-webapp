import test from '../../images/test.png'
import Image from 'next/image'
import { VerticalAnimation } from './animations/vertical-animation.component.js/vertical-animation.component'

export default function Intro() {
  return (
    <>
        <div class="container">
        <div class="row" style={{marginBottom:'11px'}}>
            <div class="col-8">
            <div><VerticalAnimation/></div>
            <p class='geniuls-desc'>Outcome Driven by Top <span class='main-points'>Industry Professionals </span> 
            <br/><span class='main-points'>1:1 Mentorship</span>  to <br/>Crack your Dream Job.</p>
              
            <button class="enrollButton">Get Started</button>
            </div>
            <div class="col-4">
            <div style={{marginRight:'40px'}}><Image src={test} alt='catalog image' className='catalog-img'/></div>
            </div>
        </div>
        </div>
    </>
  )
}   
