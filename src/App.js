//import logo from './logo.svg';
import './App.css';
//import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import BasicCardExample from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Container>
       {/* React App Demo
       <Button>Test Button</Button> */}
       <div className='.center'>
       <BasicCardExample></BasicCardExample>
       </div>
       
       </Container>
    </div>
  );
}

export default App;
