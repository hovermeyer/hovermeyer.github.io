import React from 'react';
import './App.css';
import ProjectList from "../ProjectList/ProjectList.js"
import ButtonList from "../ButtonList/ButtonList.js"
import ExperienceList from "../ExperienceList/ExperienceList.js"



class App extends React.Component{

  //this function returns the projects I will be showing 
  returnProjects(){
    return (
    [ {name:"Darren's Birthday Game", 
        technologies:[{name:"PhaserJS"},{name:"Did I use another technology"},{name:"I  think I must have"}],
        whyMade:"A fun game to celebrate a quarantine birthday.",
        description:"Complete 5 different games to get a birthday message.",
        moreDetails: "I learned PhaserJS and adapted some games to create a custom game for a 10th birthday.  This was my first attempt at creating something with PhaserJS"},
      {name:"Jammming", 
        technologies:[{name:"React"}],
        whyMade: "Final project for 'Build Front-End Web Applications from Scratch' course on Codecademy",
        description:"Uses the spotify API to create custom playlists. ",
        moreDetails: "Added the following custom abilities:"},
        
      {name:"Something Different To Check", 
        technologies:[{name:"PhaserJS"}],
        description:"A fun game to celebrate a quarantine birthday"},
      {name:"More pretend projects", 
        technologies:[{name:"PhaserJS"}],
        description:"A fun game to celebrate a quarantine birthday"}   ]);
  }



  //this function returns the employment experience I will be showing 
  returnExperiences(){
    return (
    [ {employer:"Toyota Motor Manufacturing Canada", 
        link: "https://www.tmmc.ca/en",
        title: "Materials Ordering Systems Specialist",
        datesEmployed:"June 2013 - August 2019",
        blurb:"I worked with a team of 25 specialists sourcing parts from North America and Japan.  "
        +"I created tools to make critical daily tasks faster and more accurate.",
        development: ["Created automatic pulls of CSV information",
          "Created queries and tables to ",
          "Created Excel, Access and PowerBI tools to view and manipulate data",
          "Used JIRA to create requirements and complete user acceptance testing"],
        other:["Acted as the subject matter expert on custom ordering software",
        "Solved production-critical problems under strict time constraints", 
        "Trained other team members on concepts of ordering", 
        "Worked with local, regional and global IS teams for feature requests and troubleshooting"
        ]},
      {employer:"Simcoe Muskoka Catholic District School Board", 
        link: "https://www.mathclips.ca/",
        title: "Developer -Math CLIPS",
        blurb: "I worked worked with a team of developers and teachers across Ontario to create "
        +" Math Learning Objects based in Flash." ,
        datesEmployed:"May 2009- June 2013",
        development: ["Used TortoiseSVN for version control", 
        "Created tools for other developers",
        "Worked in ActionScript 2.0 and 3.0"],
        other:["working with a remote team"]}]   );
  }


  render(){
    return (
      <div className="App">
        <header className = "w3-theme w3-center w3-container">
            <h1 style ={{fontSize:50}}> Heather Overmeyer</h1>
            <div className="w3-half" >
              <h3 >I love to:</h3>
              <list style={{textAlign:'left'}}>
                <li>create things that improve how people and organizations work</li>
                <li>travel</li>
                <li>learn new things</li>
                <li>practice my aerial silks</li>
                <li>solve problems</li>
              </list>
            </div>

            <div className="w3-half">
              <h3 >I want to work somewhere:</h3>
              <list  style={{textAlign:'left'}}>
                <li>with learning opportunities</li>
                <li>where I can contribute as part of a team</li>
                <li>that builds solutions to real problems</li>
              </list>
            </div>


            {/*This displays the drop down menu*/}
            <div class="w3-theme w3-container">
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-padding-32 w3-theme">
                  Find out more! <i class="fa fa-caret-down"></i>
                </button>
                <div class="w3-dropdown-content w3-card-4 w3-bar-block">
                  <a href="#project" class="w3-bar-item w3-button">Projects </a>
                  <a href="#experience" class="w3-bar-item w3-button">Work Experience</a>
                  <a href="#contact" class="w3-bar-item w3-button">Contact</a>
                </div>
              </div>
            </div>
        </header>

        <body>

          <div>
            <p>My name is Heather Overmeyer and I build things.</p>
            <p>My name is Heather Overmeyer and I build things.</p>
            <p>My name is Heather Overmeyer and I build things.</p>
            <p>My name is Heather Overmeyer and I build things.</p>

          </div>
          <div className="w3-container w3-theme w3-center">
            <h2 id="projects">Projects</h2>
          </div>
          <ProjectList projects={this.returnProjects()} />

          <div className="w3-container w3-theme w3-center">
            <h2 id="experience">Work Experience</h2>
          </div>
          <ExperienceList experiences={this.returnExperiences()} />



        </body>

      </div>
    );
  }
}

export default App;
