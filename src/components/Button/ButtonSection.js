import React from 'react'
import {Button, Icon} from 'react-materialize';
// import Iconbtn from './../Icon/Iconbtn';

const ButtonSection =(props)=> {
    const {className, handleClick, iconName, text} = props
    return (    
        <Button 
        node="button"
        onClick={handleClick}
        className={className}
        >{text}
        <Icon>{iconName}</Icon>
        </Button>     
    )
}

export default ButtonSection
