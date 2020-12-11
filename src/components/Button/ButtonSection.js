import React from 'react'
import {Button, Icon} from 'react-materialize';
// import Iconbtn from './../Icon/Iconbtn';

const ButtonSection =(props)=> {
    const {className, handleClick,  text} = props
    return (
          
                <Button 
                node="button"
                onClick={handleClick}
                className={className}
                >
                {/* <Icon>{text}</Icon> */}
                {text}
                </Button>
         
       
    )
}

export default ButtonSection
