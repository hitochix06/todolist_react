import Card from 'react-bootstrap/Card';

import '../Style/Tache.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Tache(props) {
 return (
  <div className='container'>
   <Card.Text>
    {props.title}
   </Card.Text>
  </div>



 );
}

{/* <Card>
<Card.Body>
</Card.Body>
<div className='container'>
 <div className='card0'>
  <Row xs={1} md={2} className="g-4">
   <Col>
    <Card>
     <Card.Body>
      {/* <Card.Title>Produit ajouter</Card.Title> */}
{/* <Card.Text>
 {props.title}
</Card.Text> */}
//      </Card.Body >
//     </Card >
//    </Col >
//   </Row >
//  </div >
// </div >
// </Card > * 




export default Tache