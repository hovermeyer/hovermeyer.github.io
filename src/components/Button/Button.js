import React from 'react';
//import './Project.css';

class Button extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (
    <div>
      <a class="w3-button w3-theme w3-third">{this.props.name}</a>
    </div>
    );
  }
}

export default Button;


