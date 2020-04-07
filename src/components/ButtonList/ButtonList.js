import React from 'react';
import Button from "../Button/Button.js"


class ButtonList extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return (


  <div className="w3-center">

          {
        this.props.buttons.map(button =>{
       return <Button
          name={button.name}
          button={button}
          technologies={button.technologies}
          description={button.description}
          href= {button.href}/> })
     }
    
  </div>

    );
  }
}

//Set a default list to have a blank Buttons list so that we can use map still
ButtonList.defaultProps = {Buttons: []};


export default ButtonList;


