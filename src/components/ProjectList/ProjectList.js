import React from 'react';
import Project from "../Project/Project.js"


class ProjectList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (

  <div class="w3-row-padding">

    <div className="w3-row-padding w3-center w3-margin-top w3-margin-bottom">

      {this.props.projects.map(project =>{
        return <Project
            name={project.name}
            project={project}
            technologies={project.technologies}
            description={project.description}
            whyMade = {project.whyMade}
            moreDetails = {project.moreDetails}
            image = {project.image}
            live = {project.live}
            code = {project.code}
            /> })
      }
      
    </div>
  </div>

    );
  }
}

//Set a default list to have a blank projects list so that we can use map still
ProjectList.defaultProps = {projects: []};


export default ProjectList;


