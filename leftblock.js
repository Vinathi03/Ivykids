import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import {Image} from "react-bootstrap";
import { Badge } from '@mui/material';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import Login from './login.componet';
// import ListGroup from 'react-bootstrap/ListGroup';

function LeftSide() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  
    function handleShow(breakpoint) {
      setFullscreen(breakpoint);
      setShow(true);
    }

    return (
        <>
      <Card style={{margin:80}}> 
      <ButtonGroup vertical>
      {/* {values.map((v, idx) => (
        <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
          Login
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))} */}
      <Button>Home</Button>
      <Button onClick={handleShow}>SignOut</Button>


      
    </ButtonGroup>
     </Card>
        
     
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)} >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body className='auth-wrapper'><Login/></Modal.Body>
      </Modal>


        </>
    );
  }
  
  export default LeftSide;