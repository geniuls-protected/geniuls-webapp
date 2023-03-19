import Image from 'next/image'
import logo from '../../images/logo.png'

export default function Navbar() {
  return (
    <>
        <nav class="container navbar navbar-expand-lg" >
    <div class="container-fluid" style={{marginTop: '17px'}}>
        <a class="navbar-brand" href="#"><Image src={logo} alt='geniuls logo' height={40}/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav">
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#howItWorks">How It Works!</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#whygeniuls">Why Geniuls?</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#contactus">Contact Us</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#faq">FAQ</a>
                </li>
                <li class="nav-item" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 10px 0px'}} href="https://98arnb8wb3v.typeform.com/to/FQMpjsm8" target='_blank' rel="noreferrer"><button className='register-button'>Register</button></a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}
