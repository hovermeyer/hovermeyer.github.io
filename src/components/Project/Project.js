import React from 'react';
//import './Project.css';
import ButtonList from "../ButtonList/ButtonList.js"


class Project extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="w3-third">
      <div className="w3-card-4 w3-container" style={{minHeight:'460px'}}>
      <h1>{this.props.name}</h1>

      <div className="w3-container">
        {
          this.props.technologies.map(technology =>{
        return (
        <div className="w3-card w3-container w3-third w3-padding ">
          <p>{technology.name}</p>
        </div>)
      })}
      </div>

      <p>{this.props.description}</p>

      </div>
    </div>

    );
  }
}

export default Project;


