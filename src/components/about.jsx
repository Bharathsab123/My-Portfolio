import react from 'react'


function About() {

  return (
    <div id="about">
        <h1 className='abouttitle'><i className="bi bi-person-fill"></i> About <span className='blue'>Me</span> </h1>
        <div className='aboutcointainer'>
        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702771200&semt=ais" alt="" className='aboutimg' />
        <div className="aboutcontent">
          <h4 className='abouttext'>Hi There,</h4>
          <h4 className='abouttext'>I am Bharath</h4>
          <p className='abouttext2'>I am a Full stack developer based on Chennai,TamilNadu.I complete B.E.Mechanical engineer in MNM Jain College. I am very passionate about improving my coding skills & developing webpage & websites and i familiar 
            with the MERN (MongoDB, Express, React, and Node.js) software stack . Working for myself to improve my skills. </p>
            <p className='abouttext3'>Email : <span className='aboutc'>bharathsab123@gmail.com</span></p>
            <p className='abouttext3'>Place : <span className='aboutc'>Chennai,TamilNadu-600 041</span></p>
            <a className='aboutbtn' href='./pdf/BharathSResume.pdf' >Resume <i className="bi bi-arrow-right"></i></a>
        </div>
        </div>
    </div>
  )
}

export default About
