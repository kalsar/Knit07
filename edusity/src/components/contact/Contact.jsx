import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
// 179fedb4-96d8-4544-895a-01865af59720

function Contact(){

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "179fedb4-96d8-4544-895a-01865af59720");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
};
   

  return (
    <div className='contact'>

    <div className='contact-col'>
    <h3>Send us a message <img src={msg_icon} alt="" /></h3>
    <p>
        Feel free to reach out through contact form or find our contact
        information below.Your feedback,questions, and suggestion are 
        important to us as we are strive to provide exceptional service to our
        institute community.
    </p>
    <ul>
        <li><img  src={mail_icon} alt="" />Kalsar@gmail.com</li>
        <li> <img  src={phone_icon} alt="" />+91-9870698361</li>
        <li> <img  src={location_icon} alt="" />Noida Uttar Pradesh</li>
    </ul>

    </div>

    <div className='contact-col'>
    <form onSubmit={onSubmit}>
        <lable>Enter your Name</lable>
        <input type="text" name="name" placeholder='Enter Your Name' required></input>

        <lable>Phone Number</lable>
        <input type="tel" name="phone" placeholder='Enter Your Phone Number' required></input>
        <lable>Write Your message here</lable>
        <textarea  name="message"  row="6" placeholder='Enter Your Message' ></textarea>
        <button type="submit" className='btn dark-btn'>Submit Now <img src={white_arrow} alt=""/></button>
    </form>
    <span>{result}</span>

  </div>

    </div>
  )
}

export default Contact