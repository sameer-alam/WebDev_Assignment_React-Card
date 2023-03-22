import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css"

function BasicCardExample() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://media.cnn.com/api/v1/images/stellar/prod/221218184732-messi-wc-trophy.jpg?c=16x9&q=h_720,w_1280,c_fill/f_webp"  width={100} height={250}/>
      <Card.Body>
        <Card.Title>The GOAT</Card.Title>
        <Card.Text>
        Lionel Messi's wait for World Cup glory is finally over after Argentina beat France 
        in a dramatic penalty shootout. It was a final for the ages.
        </Card.Text>
        <Button className='v1'>Read more!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCardExample;