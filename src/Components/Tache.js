import Card from 'react-bootstrap/Card';
import '../Style/Tache.css'

function Tache(props) {
      return (
            <div className='container'>
                  <Card.Text>
                        {props.title}
                  </Card.Text>
            </div>

      );
}




export default Tache