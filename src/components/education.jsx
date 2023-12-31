import react from 'react'
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";


function Education() {

  useEffect(()=>{
    AOS.init({
     duration: 1200,
   })
 },[])

  const education=[
    {
      name:"Guvi Zen-Class",
      degree:"Full Stack Developer",
      year:"5-Month"
    },
    {
    name:"Misrimal Navajee Munoth Jain Engineering College",
    degree:"Bachelor Of Engineering In Mechanical Engineer",
    year:"2018-2023"
  },
  {
    name:"Syed ammal higher secondary school",
    degree:"Higer Secondary School",
    year:"2018-2019"
  },
  {
    name:"Syed ammal higher secondary school",
    degree:"Bachelor Of Engineering In Mechanical Engineer",
    year:"2018-2023"
  },]

  return (
    <div id="education">
    <h1 className='edutitle'><i className="bi bi-book-fill"></i> My <span className='blue'>Education</span> </h1>
        <div className="cards1" data-aos="fade-up">
          {education.map((val,idx)=>(
            <Data key={idx}
            name={val.name}
            degree={val.degree}
            year={val.year}/>
          ))}
        </div>
    </div>
  )
}

export default Education


function Data({name,degree,year}){
  return(
    <div className="card1">
      <h1 className='eduh1'>{degree}</h1>
      <p className='edup'>{name}</p>
      <h3 className='eduh3'>{year}</h3>

    </div>
  )
}

