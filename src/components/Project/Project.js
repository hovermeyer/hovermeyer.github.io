import React from 'react';
//import './Project.css';
import ButtonList from "../ButtonList/ButtonList.js"


class Project extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4 w3-container" style={{minHeight:'460px'}}>
      <h1>{this.props.name}</h1>
      <p>{this.props.whyMade}</p>

      <div className="w3-container">
        {
          this.props.technologies.map(technology =>{
        return (
        <div className="w3-half w3-margin-bottom w3-container">
          <div className="w3-card w3-container">
            <p>{technology.name}</p>
          </div>
        </div>)
      })}
      </div>

      <p>{this.props.description}</p>
      <p>{this.props.moreDetails}</p>



      </div>
    </div>

    );
  }
}

export default Project;


