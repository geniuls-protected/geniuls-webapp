import Image from 'next/image'
import logo from '../../images/logo.png'
import logonew from '../../images/logonew.svg'

{/* <Image src={logo} alt='geniuls logo' className='logo-img'/> */}

export default function Navbar() {
  return (
    <>
        <nav class="container navbar navbar-expand-lg" >
    <div class="container-fluid" style={{marginTop: '17px'}}>
        <a class="navbar-brand" href="#"><Image src={logo} alt='geniuls logo' className='logo-img'/></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav">
                <li class="nav-item nav-comp" style={{paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#">How It Works!</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#">Why Geniuls?</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#">Contact Us</a>
                </li>
                <li class="nav-item nav-comp" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 0px 0px'}} href="#">FAQ</a>
                </li>
                <li class="nav-item" style={{paddingLeft: '20px', paddingRight: '20px'}}>
                    <a class="nav-link active" style={{padding: '13px 0px 10px 0px'}} href="#"><button className='register-button'>Register</button></a>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Menu </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                    </ul>
                </li> */}
            </ul>
        </div>
    </div>
</nav>
    </>
  )
}
