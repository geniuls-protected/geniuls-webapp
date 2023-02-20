import Image from 'next/image';
import { AiOutlineThunderbolt, AiOutlineBulb, AiOutlineHeart } from 'react-icons/ai';
import scribble from '../../images/scribble.png'

export default function HowItWorks() {
  return (
    <div className="container" style={{marginLeft:'170px'}}>
        <div class='work-heading'><bold>How it works!</bold></div>
        <Image src={scribble} class='scribble-img'/>
        <div style={{margin: '25px 0 0 20px'}}>
            <div class='sub-works'><AiOutlineThunderbolt size={25}/>&nbsp;&nbsp;An outcome driven intiative that upskills early career professionals led by <bold>GENIULS</bold> expert.</div>
            <div class='sub-works'><AiOutlineBulb size={25}/>&nbsp;&nbsp;Not a traditional course, Mentorship is provided on case-by-case basis.</div>
            <div class='sub-works'><AiOutlineHeart size={25}/>&nbsp;&nbsp;Assisstance till you get placed and beyond!</div>
        </div>
        <div style={{paddingTop:'40px'}}/>

        <div className='row'>
            <div className='col'>
                <div class="background background-filter">
                    <div class="u-non-blurred">After registering*,  A mentor and a coding buddy is assigned to you and you learn at 0 upfront fees.</div>
                </div>
            </div>
            <div className='col'>
                <div class="background background-filter">
                    <div class="u-non-blurred">A unique curriculum is designed for you after analysing your strength and weaknesses.</div>
                </div>
            </div>
            <div className='col'>
                <div class="background background-filter">
                    <div class="u-non-blurred">We provide placement opportunities and dedicated preparation for specific opportunities as well.</div>
                </div>
            </div>
            <div className='col'>
                <div class="background background-filter">
                    <div class="u-non-blurred">You crack your dream company and then start paying according to ISA.<br/><br/>If needed after some months, we start preparations again to switch for better package.</div>
                </div>
            </div>
        </div>
    </div>
  )
}
