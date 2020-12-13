import React, {useState} from 'react'
import Navigation from './../NavBar/Navigation';
import TextInputSection from './../TextInput/TextInputSection';
import {Row, Col, Icon, Card} from 'react-materialize';
import ButtonSection from './../Button/ButtonSection';



const CreatedBoard =()=> {
    const [alllist, setAlllist] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault()
    }

    const handleChange =() =>{

    }

    const handleKeyUp =() =>{

    }

    return (
        <div>
            <Navigation />
            <Row>
                <Col
                m={4}
                s={2}
                >
                    <Card
                    closeIcon={<Icon>close</Icon>}
                    reveal={
                        <form onSubmit={handleSubmit}>
                        {errorMessage? <p className="center-align red-text" >{errorMessage}</p> : ''}
                        <TextInputSection placeholder="AddList" type="text" value={alllist} name="alllist" handleChange={handleChange} handleUp={handleKeyUp} />
                       <div>
                       <ButtonSection text="create board"/>
                       </div>
                        </form>}
                    revealIcon={<Icon>more_vert</Icon>}
                   
                    >
                    <p>
                    <Icon>add</Icon> Add a List
                    </p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default CreatedBoard
