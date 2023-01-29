import Card from 'react-bootstrap/Card';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import '../Style/App.css';
import '../Style/Tache.css'
import Tache from './Tache'


function App() {

  const [newtask, setnewTask] = useState("");
  const [addTask, setaddTask] = useState([]);
  const renderTask = () => {
    return addTask.map((item) => {
      return (
        <Tache title={item} 
        
        />
      )
    })
  }

  function handleInput(e) {
    setnewTask(e.target.value);
  }

  function handleaddTask(e) {
    setaddTask((oldArray) => [...oldArray, newtask]);
  }



  return (
    <div className="App">
      <h1>ToDoliste</h1>
      <Card className='container' >
        <Form>
          <Form.Group className="mb-3 p-5" controlId="notreTache">
            <Form.Control onChange={handleInput} type="Text" placeholder="Votre tâche" />
            <Button className='boutonValide' variant="outline-primary" onClick={handleaddTask}>Valider</Button>
          </Form.Group>
        </Form>
        <h5>{renderTask()}</h5>
        <Tache array={addTask} />
      </Card>
    </div >
  );
}

export default App;
