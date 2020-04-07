import React from 'react';
import './App.css';
import ProjectList from "../ProjectList/ProjectList.js"
import ButtonList from "../ButtonList/ButtonList.js"



class App extends React.Component{

  returnProjects(){
    return (
    [ {name:"Darren's Birthday Game", technologies:[{name:"PhaserJS"},{name:"Did I use another technology"}],description:"A fun game to celebrate a quarantine birthday."},
    {name:"Jammming", technologies:[{name:"React"}],description:"Final project for 'Build Front-End Web Applications from Scratch' course on Codecademy.  Uses the spotify API to create custom playlists. "},
    {name:"Something Different To Check", technologies:[{name:"PhaserJS"}],description:"A fun game to celebrate a quarantine birthday"}  ]);
  }

  render(){
    return (
      <div className="App">
        <header className="w3-container w3-theme w3-padding" >
          <h1>Heather Overmeyer</h1>
          <p>Developer.</p>
        </header>

        <body>
          <ButtonList buttons={[{name:'Projects'},{name:'Work Experience'},{name:'Contact'}]}/>

          <header className="w3-container w3-blue-grey">
            <h2>Projects</h2>
          </header>

          <ProjectList projects={this.returnProjects()} />

        </body>
      </div>
    );
  }
}

export default App;
