import React from 'react';
import 'materialize-css';
import {Row, Col, Icon} from 'react-materialize';
import ButtonSection from './../Button/ButtonSection';

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
                <i class="material-icons righticon">apps</i>
                <i class="material-icons righticon">home</i>
            </div>
            </Col>
            <Col
                className="thecol"
                s={12} m={4} l={4}
            >
                <div className="logoimg"><img src="logotrello.png" alt="trello logo"/></div>
            </Col>
            <Col
                className="thecol"
                s={12} m={4} l={4}
            >
                <div class="buttonicon">
                    <i class="material-icons">add</i>
                    <i class="material-icons">error_outline</i>
                    <i class="material-icons">notifications_none</i>
                </div>
            </Col> 
            </Row>
            <ButtonSection onClick={handleClick}>
            <Icon class="material-icons">text="add"</Icon>
            </ButtonSection>
        </div>
    )
}

export default Navigation
