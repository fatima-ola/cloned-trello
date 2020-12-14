import React, {useState} from 'react'
import Navigation from './../NavBar/Navigation';
import TextInputSection from './../TextInput/TextInputSection';
import {Row, Col, Icon, Card} from 'react-materialize';
import ButtonSection from './../Button/ButtonSection';
import {DragDropContext} from 'react-beautiful-dnd' 




const CreatedBoard =()=> {
    const [alllist, setAlllist] = useState('');
    const [todolist, setTodolist] = useState([])
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault()
        setTodolist([...todolist, alllist])
        console.log(todolist)
    }

    const handleChange =(e) =>{
        const{name, value} = e.currentTarget;
        if(name==="alllist"){
            setAlllist(value);
        }else{
            setErrorMessage("Add a todo to the list");
        }
    }

    const handleKeyUp =() =>{
        setErrorMessage('');
    }

    const onDragEnd =(result) => {

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
                   header={<p className="addList">Add a List</p>}
                   reveal={ 
                   <form onSubmit={handleSubmit}>
                   {errorMessage? <p className="center-align red-text" >{errorMessage}</p> : ''}
                   <TextInputSection placeholder="AddList" type="text" value={alllist} name="alllist" handleChange={handleChange} handleUp={handleKeyUp} />
                  <ButtonSection text="Add List"/>
                   </form>
                   }
                   revealIcon={<Icon>more_vert</Icon>}
                   title={ <Icon>add</Icon>}
                    >        
                    </Card>
                   
                </Col>
            </Row>

            <div>
          <Row>
            {todolist.map((item)=>{
              return (
                <DragDropContext onDragEnd={onDragEnd}>
                    <div>
                  <Col  m={4}  s={12}>       
                   <Card
                    className="bluish-white darken-1" 
                    closeIcon={<Icon>close</Icon>}
                    textClassName="black-text"
                    revealIcon={<Icon>more_vert</Icon>}
                    title={ item}
                    > 
                    </Card>                
                  </Col>
                </div>
                </DragDropContext>
              )
            })}
          </Row>
          <Row>
          
            
          </Row>
        </div>
        </div>

        
    )
}

export default CreatedBoard
