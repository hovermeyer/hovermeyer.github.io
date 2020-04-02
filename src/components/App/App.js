import React from 'react';
import './App.css';
import SkillList from "../SkillList/SkillList.js"

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Heather Overmeyer</h1>
          <SkillList name = "Developer."/>
          <SkillList name = "Traveler."/>

        </header>
      </div>
    );
  }
}

export default App;
