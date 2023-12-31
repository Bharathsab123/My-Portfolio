import react from 'react'
import '../App.css'
import { useState } from 'react';


function Contact() {
  const [user, setuser] = useState("");
  const[isloading,setloading]=useState("Submit  ")
  const [email,setemail] = useState("");
  const [name,setname] = useState("");
  const [message,setmessage] = useState("");

  const handlemessage=async(e)=>{
    setloading("Loading...")
    e.preventDefault()
    try {
      const res = await fetch("https://portfolio-vy9r.onrender.com/user", {
        method: "POST",
        body: JSON.stringify({name:name, email: email, message:message }),
        headers: { "content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => userdata(data.code));
    } catch (err) {
      setloading("Submit")
      setuser("Unable to fetch , try again");
    }
  }
  const userdata = (data) => {
    if (data === 201) {
      setloading("Submit")
      setuser("Email Sent Sucessfully👍")
    } else {
      setloading("Submit")
      setuser("error in Sent Message!");
    }
  };


  return (
    <div id="contact">
      <h1 className='contacttitle'><i className="bi bi-headset"></i> Contact <span className='blue'>Me</span></h1>
       <div className="contactcontent">
        <img src="https://media.istockphoto.com/id/1291353608/vector/call-center-hotline-worker-smiling-helpline-operator-with-headset.jpg?s=612x612&w=0&k=20&c=-x00c5PIbk0d9cIss8qha5AqMeA6MF5vUciEnWMhsL0=" alt="" />
        <div className="contactbox">
          <form onSubmit={handlemessage}>
          <input type="text" placeholder="Name" className='input' value={name} onChange={(e) => setname(e.target.value)}/>
          <input type="text" placeholder='Email' className='input' value={email} onChange={(e) => setemail(e.target.value)}/>
          <textarea name="" id="" cols="30" rows="10" placeholder='Message' value={message} onChange={(e) => setmessage(e.target.value)}></textarea>
          <p className='errormsg'>{user}</p>
          <button className='contactbtn' type="submit">{isloading}<i className="bi bi-send-fill"></i></button>
          </form>
        </div>
       </div>
       <div className="bottom">
        <div className="bottom1">
        <h3>Bharath Portfolio</h3>
        <p>thank you for visiting my Portfolio website.</p>
        </div>
       <div className="bottom2">
        <h3>Quick Links</h3>
      
					    <span className="nlink1"><a href="/" className="nv1">Home</a></span>
					    <p className="nlink1"><a href="#section_1" className="nv1">About</a></p>
					    <p className="nlink1"><a href="#section_2" className="nv1">Skills</a></p>
					    <p className="nlink1"><a href="#section_3" className="nv1">Education</a></p>
              <p className="nlink1"><a href="#section_4" className="nv1">Contact</a></p>
					
       </div>
       <div className="bottom3">
        <h3>Contact Info</h3>
        <p><i className="bi bi-envelope-at-fill"></i> bharathsab123@gmail.com</p>
        <div className="btnhome">
        <a href="https://github.com/Bharathsab123" className='bottombtn1'><i className="bi bi-github github1"></i></a>
        <a href="https://www.linkedin.com/in/bharath-s-198a94234/" className='bottombtn1'><i className="bi bi-linkedin linkedin1"></i></a>
        </div>
       </div>
       </div>
       <hr/>
       <p className='bp'><i className="bi bi-c-circle"></i> Copyright Bharath</p>
       
    </div>
  )
}

export default Contact
