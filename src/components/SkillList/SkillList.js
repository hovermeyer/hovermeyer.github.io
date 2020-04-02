import React from 'react';
import './SkillList.css';

class SkillList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <p>{this.props.name}</p>
      </div>

    );
  }
}

export default SkillList;
