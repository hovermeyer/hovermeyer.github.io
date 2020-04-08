import React from 'react';
import Experience from "../Experience/Experience.js"


class ExperienceList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (

  <div class="w3-row-padding">

    <div className="w3-row-padding w3-center w3-margin-top w3-margin-bottom">

      {this.props.experiences.map(experience =>{
        return <Experience
            employer={experience.employer}
            datesEmployed ={experience.datesEmployed}
            title = {experience.title}
            development = {experience.development}
            other = {experience.other}
            blurb ={experience.blurb}
            link = {experience.link}
            /> })
      }
      
    </div>
  </div>

    );
  }
}

//Set a default list to have a blank experiences list so that we can use map still
ExperienceList.defaultProps = {experiences: []};


export default ExperienceList;


