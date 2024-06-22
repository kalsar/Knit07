import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Tesimonials = () => {

  const slider=useRef();
  let tx=0;

  const slideForward=()=>{
    if(tx>-50){
      tx=tx-25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
   

  }

  const slideBackward=()=>{
    if(tx<0){
      tx=tx+25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
    
  }

  return (
    <div className='testimonials'>
    <img src={next_icon} alt='' className='next-btn' onClick={slideForward} />
    <img src={back_icon} alt='' className='back-btn' onClick={slideBackward} />
    <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_1} alt="" />
            <div>
              <h3>Anvika Sharma</h3>
              <span>KNIT, UP</span>
            </div>

            </div>
            <p>
              Choosing to pursue my degree at KNIT was one of 
              the best decisions I've ever made. The supportive
              community, state-of-the-art facilities,and commitment
              to academic excellence have truelly exceed my
              expectations.
            </p>
          </div>
        </li>
        {/* ....... */}

        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_2} alt="" />
            <div>
              <h3>Zahid Khan</h3>
              <span>KNIT, UP</span>
            </div>

            </div>
            <p>
              Choosing to pursue my degree at KNIT was one of 
              the best decisions I've ever made. The supportive
              community, state-of-the-art facilities,and commitment
              to academic excellence have truelly exceed my
              expectations.
            </p>
          </div>
        </li>
        {/* ....... */}
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_3} alt="" />
            <div>
              <h3>Anuska tirpathy</h3>
              <span>KNIT, UP</span>
            </div>

            </div>
            <p>
              Choosing to pursue my degree at KNIT was one of 
              the best decisions I've ever made. The supportive
              community, state-of-the-art facilities,and commitment
              to academic excellence have truelly exceed my
              expectations.
            </p>
          </div>
        </li>
        {/* ....... */}
        <li>
          <div className='slide'>
            <div className='user-info'>
            <img src={user_4} alt="" />
            <div>
              <h3>John smith</h3>
              <span>KNIT, UP</span>
            </div>

            </div>
            <p>
              Choosing to pursue my degree at KNIT was one of 
              the best decisions I've ever made. The supportive
              community, state-of-the-art facilities,and commitment
              to academic excellence have truelly exceed my
              expectations.
            </p>
          </div>
        </li>
        {/* ....... */}
      </ul>
    </div>

    </div>
  )
}

export default Tesimonials