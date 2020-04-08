import React from 'react';
//import './Experience.css';
import ButtonList from "../ButtonList/ButtonList.js"


class Experience extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
    <div className="w3-margin-bottom">
      <div className="w3-card-4 w3-container" style={{minHeight:'200px'}}>
      <div className = "w3-third">
        <a href={this.props.link} target="_blank"><h4>{this.props.employer}</h4></a>
        <h2><b>{this.props.title}</b></h2>
        <p><i>{this.props.datesEmployed}</i></p>
        <div className = "w3-margin-bottom w3-padding-32" style ={{textAlign:'center', paddingLeft:'10%', paddingRight:'10%'}}>
          <p>{this.props.blurb}</p>
        </div>

      </div>
      <div className="w3-half w3-margin-bottom w3-container">
          <div className=" w3-container">
            <h2>Development Experience</h2>
            <list style={{textAlign:'left'}}>
            {this.props.development.map(item=>{
              return <li>{item}</li>
            })}
            </list>
          </div>
        </div>

        <div className="w3-half w3-margin-bottom w3-container">
          <div className=" w3-container">
            <h2>Other Experience</h2>
            <list style={{textAlign:'left'}}>
            {this.props.other.map(item=>{
              return <li>{item}</li>
            })}
            </list>

          </div>
        </div>

      <p>{this.props.description}</p>
      <p>{this.props.moreDetails}</p>



      </div>
    </div>

    );
  }
}

export default Experience;


