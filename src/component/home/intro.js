import test from '../../images/test.png'
import Image from 'next/image'
import { VerticalAnimation } from './animations/vertical-animation.component.js/vertical-animation.component'

export default function Intro() {
  return (
    <>
        <div class="container" style={{padding: '94px 0 45px 45px'}}>
        <div class="row" style={{marginBottom:'11px', marginLeft:'30px'}}>
            <div class="col-8">
            <div><VerticalAnimation/></div>
            <p class='geniuls-desc'>An outcome driven initiative.<br/>Unique <span class='main-points'>industry-oriented curriculum</span><br/>designed for you by <span class='main-points'>expert mentors</span></p>
            <a href="https://98arnb8wb3v.typeform.com/to/FQMpjsm8" target='_blank' rel="noreferrer"><button class="enrollButton get-started">Get Started</button></a>
            </div>
            <div class="col-4">
            <div style={{marginRight:'40px'}}><Image src={test} alt='catalog image' className='catalog-img'/></div>
            </div>
        </div>
        </div>
    </>
  )
}   
