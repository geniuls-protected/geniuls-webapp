import catalog from '../../images/catalog.png'
import Image from 'next/image'
import { VerticalAnimation } from './animations/vertical-animation.component.js/vertical-animation.component'

export default function Intro() {
  return (
    <>
        <div class="container">
        <div class="row">
            <div class="col-8">
            <div><VerticalAnimation/></div>
            <button class="enrollButton">Get Started</button>
            </div>
            <div class="col-4">
            <div style={{marginRight:'40px'}}><Image src={catalog} alt='catalog image' className='catalog-img'/></div>
            </div>
        </div>
        </div>
    </>
  )
}   
