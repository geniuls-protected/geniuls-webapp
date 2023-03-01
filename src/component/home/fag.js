import Image from 'next/image'
import Dream from '../../images/Dream.png'

{/* <Image src={logo} alt='geniuls logo' className='logo-img'/> */}

export default function FAQ() {
  return (
    <>
    <div class="container" id='faq'>
      <div class="row">
        <div class="col-5 dream-img" style={{paddingTop:'100px', marginLeft:'-112px'}}><Image src={Dream} height={370}/></div>
        <div class='col-2'></div>
        <div class="col-5">
        <h4 class='faq-head'>Frequently Asked Questions</h4>
    <div class="accordion accordion-flush faq-style" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <span class='faq-heading'>How does Pay after Placement works?</span>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">You can pay for your mentorship fees by using Income Share Agreement. ISA  at Geniuls is a contract between students and Geniuls where you commit to pay a set amount for some months. Only after you are placed for 7LPA and above you start paying Geniuls back.<br/>You do not pay us anything if you do not receive the desired result, which is a job paying at least INR 7,00,000 (CTC). In that case your education is totally free.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      <span class='faq-heading'>What if I don&apos;t get placed for 7LPA or more?</span>
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">We at Geniuls are always working to find you good placement opportunities.  In fact our students after bootcamp have multiple dream offers to choose from with packages ranging from 10LPA to 36LPA.<br/>In the rare case that you don’t get a job of your threshold amount, your education will be completely free.</div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      <span class='faq-heading'>What will be my curriculum and who will be teaching me?</span>
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">This is what separates Geniuls from the rest, we don&apos;t offer you a traditional course. We design our course and curriculum according to unique requirements and skills of a student. If the syllabus designed for you overlaps with some other students you will be placed in a small batch otherwise we will be happy to give you a one-on-one sessions.<br/>You don&apos;t have to worry about the mentor that will be assigned to you. Our each mentor has an impeccable placement record, some used to work for MAANG companies, some helped students crack MAANG companies and some still work as recruiters for dream companies.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      <span class='faq-heading'>Does Geniuls provide job switching assistance?</span>
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Yes, even after you get placed we will be still helping you get better offers.<br/>For experienced candidates we even have flexible ISA threshold.<br/>We have helped working professionals in past getting a better package and position.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      <span class='faq-heading'>How will Geniuls verify my income?</span>
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As per the ISA, you will be legally bound to furnish all the income relevant documents such as Offer Letter, Salary Slips, Income Tax Returns, Bank Statements, etc. to Geniuls. Also fee collection happens through a NBFC partner. In case of voluntary non-payments, the NBFC will initiate legal action to recover the pending payments. Also, this will negatively impact your credit score.</div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    <div class='faq-mobile'></div>
    </>
  )
}