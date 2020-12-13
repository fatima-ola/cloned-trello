import React from 'react';
import 'materialize-css';
import {Row, Col} from 'react-materialize';
import ButtonSection from './../Button/ButtonSection';
import { NavLink } from 'react-router-dom';

const Navigation =()=> {
    const handleClick = () =>{

    }
        return (
        <div className="navcontainer"> 
            <Row>
            <Col
                className="thecol"
                s={12} m={4} l={4}
            >
            <div class="btnicon">
                <ButtonSection onClick={handleClick}  iconName="apps" className="logbtn"/>
                <NavLink to="/">
                    <ButtonSection onClick={handleClick}  iconName="home" className="logbtn"/>
                </NavLink>
            </div>
            </Col>
            <Col
                className="thecol "
                s={12} m={4} l={4}
            >
                <div className="logoimg"><img src="logotrello.png" alt="trello logo"/></div>
            </Col>
            <Col
                className="thecol"
                s={12} m={4} l={4}
            >
                <div class="buttonicon">
                <ButtonSection onClick={handleClick}  iconName="add" className="logbtn"/>
                <ButtonSection onClick={handleClick}  iconName="error" className="logbtn"/>
                <ButtonSection onClick={handleClick}  iconName="notifications_none" className="logbtn red"/>
                </div>
            </Col> 
            </Row>
        </div>
    )
}

export default Navigation
