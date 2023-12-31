import react from 'react'
import '../App.css'

function Skills() {

  const skills=[{
    img:"./image/5847f5c3cef1014c0b5e489d.png",
    name:"Html5"
  },
  {
    img:"./image/62b2221b038aad4d3ed7ca30.png",
    name:"Css"
  },
  {
    img:"./image/613b64fe30e8530004ba3a03.png",
    name:"JavaScript"
  },
  {
    img:"./image/kisspng-bootstrap-logo-computer-software-web-application-p-b-5abb6c2ab15640.3860806115222323627264.png",
    name:"Bootstrap"
  },
  {
    img:"./image/584830f5cef1014c0b5e4aa1.png",
    name:"React Js"
  },
  {
    img:"./image/5848309bcef1014c0b5e4a9a.png",
    name:"Redux"
  },
  {
    img:"./image/kisspng-node-js-javascript-react-logo-express-js-javascript-logo-5b4ca5c70f0195.6239386615317498310615.png",
    name:"Express Js"
  },
  {
    img:"./image/node-js-javascript-web-application-express-js-computer-software-others.jpg",
    name:"Node Js"
  },
  {
    img:"./image/58481057cef1014c0b5e4951.png",
    name:"My Sql"
  },
  {
    img:"./image/58481021cef1014c0b5e494b.png",
    name:"MongoDB"
  },
  {
    img:"./image/kisspng-amazon-web-services-amazon-com-logo-configure-aws-cli-profiles-quickly-and-efficient-5b7790b340b934.7717715115345624832651.png",
    name:"AWS"
  },
  {
    img:"./image/png-transparent-material-ui-hd-logo.png",
    name:"MaterialUI"
  },
  {
    img:"./image/download.png",
    name:"GitHub"
  },
  {
    img:"./image/5847f5c3cef1014c0b5e489d.png",
    name:"Html"
  }]

  return (
    <div id="skills">
      <h1 className='skillstitle'><i className="bi bi-laptop"></i> Skills</h1> 
        <div className="cards">
          {skills.map((val,idx)=>(
            <Data key={idx}
            img={val.img}
            name={val.name}/>
          ))}
        </div>
    </div>
  )
}

export default Skills


function Data({img,name}){
  return(
    <div className="card">
      <img src={img} alt="" className='skillsimg' />
      <p className='skillsname'>{name}</p>
    </div>
  )
}
