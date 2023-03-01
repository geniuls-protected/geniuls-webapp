import Image from 'next/image';
import scribble from '../../images/scribble.png'

export default function WhyGeniuls() {
  return (
    <>
        <div className="container" id='whygeniuls'>
          <div class='work-heading why-layout'><bold>Why Geniuls?</bold></div>
          <div class='scribble-img'><Image src={scribble} class='why-layout'/></div>
          <div class='why-layout'>
            <div class='row'>
            <div class='col-lg-4 col-md-4 col-sm-12 why-box'>
              <div class='circle-center'><div class='numberCircle'>01</div></div>
              <div class='why-head'>Pay after you get placed!</div>
              <div class='why-sub'>Eliminating Monetary Risk of <br/> Higher Education</div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-12 why-box'>
              <div class='circle-center'><div class='numberCircle'>02</div></div>
              <div class='why-head'>No pre-requirements!</div>
              <div class='why-sub'>Any college, Any CGPA, Any degree</div>
            </div>
            <div class='col-lg-4 col-md-4 col-sm-12 why-box'>
              <div class='circle-center'><div class='numberCircle'>03</div></div>
              <div class='why-head'>Up to date curriculum</div>
              <div class='why-sub'>Understanding of Workspace and updated <br/> Technology(missing in Freshers Hired <br/>by Companies from college)</div>
            </div>
          </div>
          </div>
        </div>
    </>
  )
}