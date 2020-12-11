import React, {useState} from 'react';
import {Modal, Button, Row, Card, Col, Icon} from 'react-materialize';
import ButtonSection from './../Button/ButtonSection';
import TextInputSection from './../TextInput/TextInputSection';

const BoardSection = ()=> {

  const [boardtitle, setBoardtitle] = useState('');
  const [allboardtitle, setAllboardtitle] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      setAllboardtitle([...allboardtitle, boardtitle])     
    }

    const handleChange = (e) => {
      const {name, value} = e.currentTarget;
      if(name === 'boardtitle'){
        setBoardtitle(value);
      }
    }

    const handleKeyUp = () => {
      setErrorMessage('');
    }



    return (
        <div>
          <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green">Close</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          id="Modal-0"
          open={false}
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          // root={[object HTMLBodyElement]}
          trigger={<Button node="button" className="creatbtn black-text btn-large">Create new board</Button>}
        >
          <form onSubmit={handleSubmit}>
          {errorMessage? <p className="center-align red-text" >{errorMessage}</p> : ''}
          <TextInputSection placeholder="Add board Title" type="text" value={boardtitle} name="boardtitle" handleChange={handleChange} handleUp={handleKeyUp} />
          <ButtonSection text="create board"/>
          </form>
        </Modal> 

        <div>
          <Row>
            {allboardtitle.map((item)=>{
              return (
                <div>
                  <Col  m={4}  s={12}>
                    <Card
                    className="blue-grey darken-1" 
                    closeIcon={<Icon>close</Icon>}
                    revealIcon={<Icon>more_vert</Icon>}
                    textClassName="white-text"
                    title={item}
                    > 
                    </Card>
                  </Col>
                </div>
              )
            })}
          </Row>
        </div>
      </div>
       
    )
}

export default BoardSection
