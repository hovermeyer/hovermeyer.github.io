import React from 'react';
import './App.css';
import ProjectList from "../ProjectList/ProjectList.js"
import ButtonList from "../ButtonList/ButtonList.js"



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
  render(){
    return (
      <div className="App">
        <header className = "w3-theme w3-center w3-container">
            <h1 style ={{fontSize:100}}> Heather Overmeyer</h1>

            {/*This displays the drop down menu*/}
            <div class="w3-bar w3-theme">
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

          <div className="w3-container w3-theme">
            <h2 id="experience">Work Experience</h2>
          </div>



        </body>

      </div>
    );
  }
}

export default App;
