import React from 'react'
import './Contact.css'
import message from '../../Assets/message.jpeg'
import location from '../../Assets/location.jpeg'
import mail from '../../Assets/mail.jpeg'
import phone from '../../Assets/phone.jpeg'
import arrow from '../../Assets/arrow.png'

const Contact = () => {

//Obtained Submission APIs.
const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "f3fa6af9-4aec-4bda-a48c-5e8ca53b4ffb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  }
  return (
    <div className='contact'>
        <div className='details'>
            <h3>Send Rogers a Message<img src={message}/>...</h3>
            <p>
                Feel free to reach out for any bug Correction on my Site.
                It would really appreciate all your Suggetions concerning improvements
            </p>
            <ul>
              <li><img src={mail} className='icons'/>ranguzu7@gmail.com</li>
              <li><img src={phone} className='icons'/>+256786553418 || +254797146124</li>
              <li><img src={location} className='icons'/>14634, USIU-AFRICA <br/>Nairobi,Kenya</li>
            </ul>
        </div>
         <div className='submi'>
          <form onSubmit={onSubmit}>
            <label>Your First Name: </label>
            <input type='text' placeholder='Enter first name' name='fname' required/>
            <label>Your Last Name: </label>
            <input type='text' placeholder='Enter last name' name='lname' required/>
            <label>Phone Number: </label>
            <input type='tel' placeholder='+256-xxx-xxx-xxx' name='phone'required/>
             <label>Email Address: </label>
            <input type='tel' placeholder='villageelder@******' name='email'required/>
            <label>Write your Messages here</label>
            <textarea cols='30' rows='10' name='message' placeholder='Enter your Message here'></textarea>
            <button className='btn dark-btn'>Submit now <img src={arrow}/></button>
          </form>
          <span>{result}</span>
         </div>
    </div>
  )
}

export default Contact