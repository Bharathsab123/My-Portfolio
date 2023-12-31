import React, { Component } from "react";
import ScrollspyNav from "react-scrollspy-nav";
import Home from "./components/home"
import "./App.css"
import About from "./components/about"
import Skills from "./components/skills";
import Contact from "./components/contact";
import Education from "./components/education";
import Project from "./components/project";


class App extends Component {
	render() {
		return (
			<div>
				<div className="navlink">
					<div id="navtitle">
				<img src="./titleimg.png" alt="" className="titleimg"/>
                <h4>Bharath S</h4></div>
          <div className="end">
					<ScrollspyNav scrollTargetIds={["section_1", "section_2", "section_3","section_4","section_5"]} activeNavClass="is-active" className="linknav">
					    <span className="nlink"><a href="/" className="nv">Home</a></span>
					    <span className="nlink"><a href="#section_1" className="nv">About</a></span>
					    <span className="nlink"><a href="#section_2" className="nv">Skills</a></span>
					    <span className="nlink"><a href="#section_3" className="nv">Education</a></span>
                        <span className="nlink"><a href="#section_4" className="nv">Project</a></span>
						<span className="nlink"><a href="#section_5" className="nv">Contact</a></span>
					</ScrollspyNav>
          </div>
				</div>
				
				<div>
					<div style={{"height": "750px"}}><span>{<Home/>}</span></div>
					<div id="section_1" style={{"height": "700px"}}><span>{<About/>}</span></div>
					<div id="section_2" style={{"height": "980px"}}><span>{<Skills/>}</span></div>
					<div id="section_3" style={{"height": "720px"}}><span>{<Education/>}</span></div>
					<div id="section_4" style={{"height": "944px"}}><span>{<Project/>}</span></div>
                    <div id="section_5" style={{"height": "500px"}}><span>{<Contact/>}</span></div>
				</div>
			</div>
		);
	}
}

export default App;	
