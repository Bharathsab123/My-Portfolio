import React from "react";
import "../app.css"

function Project(){
    const project=[{
        name:"Fitness Logger App",
        img:"public/image/Screenshot 2023-12-31 142710.png",
        code:"https://github.com/Bharathsab123/fitness-Project-frontend.git",
        livesite:"https://deluxe-strudel-e2af3d.netlify.app/",
        description:"Fitness app is used to improve your exercise method and teach how to train your muscles with proper equipment."
    },{
        name:"Image Searching Website",
        img:"./image/Screenshot 2023-12-18 185422.png",
        code:"https://github.com/Bharathsab123/Day-20-promiseTask-2.git",
        livesite:"https://stellular-empanada-048e88.netlify.app",
        description:"It is a image searching website you can search what ever image you want"
    },
    {
        name:"Redux Add To Cart",
        img:"./image/Screenshot 2023-12-18 190104.png",
        code:"https://github.com/Bharathsab123/Day-32React-Redux-Task.git",
        livesite:"https://keen-wisp-97b264.netlify.app",
        description:"It is a  Add to card webpage using redux"
    },
{
        name:"Password Reset Flow",
        img:"./image/Screenshot 2023-12-18 184905.png",
        code:"https://github.com/Bharathsab123/password-reset-frontend.git",
        livesite:"https://loquacious-croquembouche-a91769.netlify.app",
        description:"In this project i build complete sign up ,sign in and password reset flow. If you want to reset password we sent Email OTP to your register account and verifiy otp and allow to change password."
    }]
    return(
        <div className="project">
            <h1 className="projecttitle"><i className="bi bi-laptop"></i>  Projects Made</h1>
        <div className="maincontainer">
          {project.map((val,idx)=>(
            <Data key={idx}
            img={val.img}
            name={val.name}
            code={val.code}
            livesite={val.livesite}
            description={val.description}/>
          ))}
    </div>
    </div>
  )
}

export default Project


function Data({img,name,code,description,livesite}){
  return(
    <div className="thecard">
    <div className="thefront">
      <img src={img} alt="" className='projectimg' />
      <h3 className='projectname'>{name}</h3>
      </div>
      <div className="theback">
        <h4 className="projectname1">{name}</h4>
        <h4 className="projectname2">Description : </h4>
        <p className="projectpara">{description}</p>
        <div className="codebtn">
        <a className="projectbtn" href={code} type="button">Code</a>
        <a className="projectbtn" href={livesite} type="button">LiveSite</a>  
        </div>
    </div>
    </div>
  )
}

   