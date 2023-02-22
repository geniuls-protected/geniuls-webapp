import Image from 'next/image';
import { AiOutlineThunderbolt, AiOutlineBulb, AiOutlineHeart } from 'react-icons/ai';
import scribble from '../../images/scribble.png'

export default function HowItWorks() {
  return (
    <div className="container">
        <div class='work-heading why-layout'><bold>How it works!</bold></div>
        <Image src={scribble} class='scribble-img why-layout'/>
        <div style={{margin: '25px 0 0 20px'}}>
            <div class='sub-works why-layout'><AiOutlineThunderbolt size={25}/>&nbsp;&nbsp;An outcome driven intiative that upskills early career professionals led by <bold>GENIULS</bold> expert.</div>
            <div class='sub-works why-layout'><AiOutlineBulb size={25}/>&nbsp;&nbsp;Not a traditional course, Mentorship is provided on case-by-case basis.</div>
            <div class='sub-works why-layout'><AiOutlineHeart size={25}/>&nbsp;&nbsp;Assisstance till you get placed and beyond!</div>
        </div>
        <div style={{paddingTop:'40px'}}/>

        <div class='why-layout'>
        <div className='row'>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(238, 255, 247)'}}>
                    <br/>
                    After registering*,  A mentor and a coding buddy is assigned to you and you learn at 0 upfront fees.
                    <div style={{height:'18px'}} />
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(247, 247, 255)'}}>
                    <br/>
                    A unique curriculum is designed for you after analysing your strength and weaknesses.
                    <div style={{height:'18px'}} />
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(246, 237, 231)'}}>
                    <br/>
                    We provide placement opportunities and dedicated preparation for specific opportunities as well.
                    <div style={{height:'18px'}} />
                    <br/>
                </div>
            </div>
            <div className='col'>
                <div class="works-box" style={{backgroundColor: 'rgb(242, 247, 255)', paddingTop:'25px', paddingBottom:'25px'}}>
                    You crack your dream company and then start paying according to ISA.If needed after some months, we start preparations again to switch for better package.
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
