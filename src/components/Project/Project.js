import React from 'react';
//import './Project.css';
import ButtonList from "../ButtonList/ButtonList.js"


class Project extends React.Component{

  constructor(props){
    super(props);
  }

  picture(){
    if (!this.props.image){
      return <div className="w3-container" style={{width:120, height:100}}></div>
    }else{
      return <img src={require(`../../../public/${this.props.image}`)} style={{width:125, height:125}}/>
    }
  }


  //the source 
  render(){
    return (
    <div className="w3-third w3-margin-bottom">
      <div className="w3-card-4 w3-container" style={{minHeight:'460px'}}>
      <h1>{this.props.name}</h1>
      <p><b>Built with: </b> {this.props.technologies.join(" ")} </p>

      <p><i>{this.props.whyMade}</i></p>
      {this.picture()}

      <div style ={{textAlign:"left"}}>
        <p>{this.props.description}</p>
        <p>{this.props.moreDetails}</p>
      </div>

      <a className="w3-button w3-theme w3-third" href={this.props.live} target = "_blank">Try it!</a>
      <div className="w3-container w3-third"> </div>
      <a className="w3-button w3-theme w3-third" href={this.props.code} target = "_blank">See code</a>




      </div>
    </div>

    );
  }
}

export default Project;


