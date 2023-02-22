import {MdFacebook} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoLogoLinkedin} from'react-icons/io'
import {FiArrowRight} from 'react-icons/fi'

export default function Footer() {
  return (
    <div style={{backgroundColor:'#030a21', color:'#fff'}}>
     <div style={{paddingTop:'40px'}}/>
     <div className="container footer -style">
        <div className="row">
            <div className="col-7">
                <h4>Subscribe to our newsletter</h4>
                <p>Get updates on new programs, workshops, the latest developments, and community<br/> activities, straight to your inbox.</p>
                <div style={{paddingTop:'20px'}}/>
                <div className='send-style'>
                    <input type='text' placeholder='Enter your email' className='input-email'/>
                    <button class="email-send" type="button"><FiArrowRight size={28}/></button>
                </div>
                <div style={{paddingTop:'20px'}}/>
                <div style={{display:'flex'}}> 
                    <MdFacebook size={30}/> <div style={{paddingRight:'20px'}}/>  
                    <AiOutlineInstagram size={30}/> <div style={{paddingRight:'20px'}}/> 
                    <IoLogoLinkedin size={30}/>
                </div>
            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col-6">
                        Geniuls <br/> <div style={{paddingTop:'20px'}}/> 
                        <p className='footer-subtext'>About Us</p>
                        <p className='footer-subtext'>Contact Us</p>
                        <p className='footer-subtext'>Refund Policy</p>
                    </div>
                    <div className="col-6">
                        More <br/> <div style={{paddingTop:'20px'}}/> 
                        <p className='footer-subtext'>We're hiring</p>
                        <p className='footer-subtext'>Geniuls for Teams</p>
                        <p className='footer-subtext'>Learner's center</p>
                        <p className='footer-subtext'>Apply as Mentor</p>
                        <p className='footer-subtext'>Newsletter Archive</p>
                    </div>
                </div>
            </div>
        </div>
     </div>
     <div style={{paddingTop:'40px'}}/>
    </div>
  )
}
