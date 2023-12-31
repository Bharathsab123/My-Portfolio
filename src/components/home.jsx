import react from 'react'
import { useEffect } from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter'
import '../App.css'
import AOS from "aos";
import "aos/dist/aos.css";




function Home() {


  useEffect(()=>{
     AOS.init({
      duration: 1200,
    })
  },[])
  


  const [text]= useTypewriter({
    words:["Frondend Developer!","Backend Developer!","FullStack Developer!"],
    loop:{},
    typeSpeed:120,
    deleteSpeed:80
  })

  return (
    <>
    <div id="home">
      <div className="content" data-aos="fade-up" >
       <h1 className='hometext'>Hi, </h1>
       <h1 className='hometext'>I am <span className='orange'> Bharath S</span></h1>
        <p className='homeanime'>I am a <span className='textcolor'>{text}<Cursor/></span></p>
        <button className='homebtn'><a href="#section_1" className='homebtn'>About <i className="bi bi-arrow-down-circle-fill"></i></a></button>
        <div className="btnhome" data-aos="fade-left">
        <a href="https://github.com/Bharathsab123" className='bottombtn1'><i className="bi bi-github github1"></i></a>
        <a href="https://www.linkedin.com/in/bharath-s-198a94234/" className='bottombtn1'><i className="bi bi-linkedin linkedin1"></i></a>
        </div>
        </div>
        <img className="homeimg" src="https://i.pinimg.com/originals/af/09/41/af0941ba06185e9846af909ba9350baf.png" alt="" />
    </div>
     
    </>
  )
}

export default Home
