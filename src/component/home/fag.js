import Image from 'next/image'
import logo from '../../images/logo.png'

{/* <Image src={logo} alt='geniuls logo' className='logo-img'/> */}

export default function FAQ() {
  return (
    <>
    <div class="container">
      <div class="row">
        <div class="col-5">image</div>
        <div class="col-7">
        <h4 style={{textAlign:'center', fontWeight:'bold'}}>Frequently Asked Questions</h4>
    <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is the PAP Agreement and how does it work?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The Pay After Placement Agreement is a way to pay your Masai course fee. PAP at Masai is an agreement between students and Masai under which you agree to pay a fixed monthly payment for 36 months or less. The payment starts only once you earn a salary above the threshold amount. The threshold amount is the minimum salary you have to earn before you start paying Masai your course fee.<br/>If you do not get the promised outcome, a job that pays INR 5,00,000/- (CTC) or more, you pay us nothing at all. Your education is free.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Do I need to submit any document post getting a job?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">As per the Pay After Placement(PAP) Agreement, you will be legally bound to furnish all the documents relevant to your income, such as your Offer Letter, Salary Slips, IT Returns, Bank statements, etc.</div>
    </div>
  </div>
  
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What is the interest rate on my Pay After Placement(PAP) payments?
      </button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">PAP Agreement is NOT a loan, so there is no interest on your payment.</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFour">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      What is CTC?
      </button>
    </h2>
    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">CTC (Cost to Company) is defined as “Your total salary (including variable pay), compensations, and gross income and including, but not limited to, benefits such as insurance, HRA, fitness/health benefits, other benefits and allowances including, but not limited to, house rent allowance, leave travel allowance, conveyance and travelling allowance, phone allowance, vehicle allowance and other allowances provided to you from employment or pursuant to self-employment”</div>
    </div>
  </div>

  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingFive">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      When do my PAP repayments start and what if I get fired?
      </button>
    </h2>
    <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        It will come into action once you get placed with at or more than 5 LPA CTC job after completion of the course.<br/>In the event, you lose your job because<br/>
        i. your employer/company you were placed in stops its business,<br/>
        ii. pay-cut is introduced by your employer/ company you were placed in, across the company,<br/>
        iii. lay-off by your employer/ company you were placed in, due to economic hardship,<br/>
        your payments will automatically be paused after you’ve reported the change and produced the requisite supporting documents.</div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
    </>
  )
}