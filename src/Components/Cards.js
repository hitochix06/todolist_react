import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Tache from './Tache'

function Cards(props) {
 const renderTask = () => {
  return props.array.map((item) => {
   return (
    <Tache title={item.etat}
    />
   )
  })
 }

 return (
  <div className='container'>
   <Card className="text-center">
    <Card.Header>Liste en cours </Card.Header>
    <Card.Body>
     <Card.Title>{renderTask()}</Card.Title>
     <Button variant="primary">Liste finie</Button>
    </Card.Body>
   </Card>
  </div>



 );
}

export default Cards