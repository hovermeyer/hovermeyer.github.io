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
        technologies:["PhaserJS"],
        whyMade:"A fun game to celebrate a quarantine birthday.",
        description:"Complete 5 different games to get a birthday message.",
        moreDetails: "I learned PhaserJS and adapted some games to create a custom game for a 10th birthday.  This was my first attempt at creating something with PhaserJS",
        image: "darren_screenshot.png",
        live:"https://hovermeyer.github.io/birthday-game/",
        code:"https://github.com/hovermeyer/birthday-game"},
      {name:"Jammming", 
        technologies:["React"],
        whyMade: "Final project for 'Build Front-End Web Applications from Scratch' course on Codecademy",
        description:"Uses the spotify API to create custom playlists. ",
        moreDetails: "I added some custom abilities including displaying duration and search on enter.",
        image: "jammming.png",
        live:"https://hovermeyer.github.io/jammming/",
        code:"https://github.com/hovermeyer/jammming"} ]);
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
          "Created queries and scripts which improved data validation",
          "Created Excel, Access and PowerBI tools to view and manipulate data",
          "Used JIRA to create requirements and complete user acceptance testing"],
        other:["Acted as the subject matter expert on custom ordering software",
        "Solved production-critical problems under strict time constraints", 
        "Trained other team members on concepts of ordering", 
        "Worked with local, regional and global IS teams for feature requests and troubleshooting"
        ]},
        {employer:"Technovation", 
        link: "https://technovationchallenge.org/",
        title: "Volunteer Mentor",
        blurb: "I am a mentor for a team of 4 girls to create a mobile app which solves a problem in the community.  " +
        " I have helped them through ideation and creation of their app." ,
        datesEmployed:"January 2020 - ",
        development: ["Using Thunkable to create mobile apps using block programming", 
        "Teaching team programming concepts"],
        other:["Keep team on track to meet deadline"]},
      {employer:"Simcoe Muskoka Catholic District School Board", 
        link: "https://www.mathclips.ca/",
        title: "Developer - Math CLIPS",
        blurb: "I worked with a team of developers and teachers across Ontario to create "
        +" Math Learning Objects based in Flash." ,
        datesEmployed:"May 2009 - June 2013",
        development: ["Used TortoiseSVN for version control", 
        "Created tools for other developers",
        "Worked in ActionScript 2.0 and 3.0"],
        other:["Working with a remote team"]}]   );
  }


  render(){
    return (
      <div className="App">
        <header className = "w3-theme w3-center w3-container">
            <h1 style ={{fontSize:50}}> Heather Overmeyer</h1>
            <p><i>BBA, BMath</i></p>
            
            <div className="w3-half" style={{textAlign:'left'}}>
              <h3 >I love to:</h3>
              <list >
                <li>create things that improve how people and organizations work</li>
                <li>travel</li>
                <li>learn new things</li>
                <li>practice my aerial silks</li>
                <li>solve problems</li>
              </list>
            </div>

            <div className="w3-half" style={{textAlign:'left'}}> 
              <h3 >I want to work somewhere:</h3>
              <list  >
                <li>with learning opportunities</li>
                <li>where I can contribute as part of a team</li>
                <li>that builds solutions to real problems</li>
              </list>
            </div>

            {/*This displays the drop down menu*/}
            <div class="w3-theme w3-container" style ={{minHeight:200}}>
              <div class="w3-dropdown-hover">
                <button class="w3-button w3-padding-32 w3-theme">
                  Find out more! <i class="fa fa-caret-down"></i>
                </button>
                <div class="w3-dropdown-content w3-card-4 w3-bar-block">
                  <a href="#contact" class="w3-bar-item w3-button">Contact</a>
                  <a href="#experience" class="w3-bar-item w3-button">Highlighted Experience</a>
                  <a href="#projects" class="w3-bar-item w3-button">Projects </a>
                </div>
              </div>
            </div>
        </header>

        <body>
          <div className="w3-container w3-black w3-center">
            <h2 id="contact">Contact Me</h2>
          </div>

          <div className = "w3-container w3-margin-top w3-padding">
            {/*email information*/}
            <div className="w3-third">
              <a href="mailto:heather.overmeyer@gmail.com" target="_blank" className="w3-center">
                <div className ="w3-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z"/></svg>                </div>
                <p>heather.overmeyer@gmail.com</p>
              </a>
            </div>

            {/*github information*/}
            <div className="w3-third">
              <a href="https://github.com/hovermeyer/" target="_blank" className="w3-center">
                <div className ="w3-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <p>github.com/hovermeyer</p>
              </a>
            </div>
          
            {/*linkedin information*/}
            <div className="w3-third">
              <a href="https://linkedin.com/in/heather-overmeyer/" target="_blank" className="w3-center">
                <div className ="w3-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </div>
                <p>linkedin.com/in/heather-overmeyer</p>
              </a>
            </div>
          </div>

          <div className="w3-container w3-black w3-center">
            <h2 id="experience">Highlighted Experience</h2>
          </div>
          <p>These are the jobs and volunteer positions which had development related aspects. For a full list of my work experience, visit my  
          <a href='https://www.linkedin.com/in/heather-overmeyer' target="_blank"> LinkedIn profile. </a></p>
          <ExperienceList experiences={this.returnExperiences()} />

          
          <div className="w3-container w3-black w3-center">
            <h2 id="projects">Projects</h2>
          </div>
          <ProjectList projects={this.returnProjects()} />
        </body>

      </div>
    );
  }
}

export default App;
