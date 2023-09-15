import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ListGroup } from 'react-bootstrap';
import {Image} from "react-bootstrap";


function RightSide() {
    return (
        <>
      <Card style={{marginTop:50}}>
        <Card.Body>
          <Card.Title> Subscribe to Premium</Card.Title>
          <Card.Text>
         
            Subscribe to unlock new features and if eligible, receive a share of ads revenue.
          </Card.Text>
          <Button variant="primary">Subscribe</Button>
        </Card.Body>
      </Card>

        <Card style={{ width: '18rem',marginTop:5 }}>
        <ListGroup variant="flush">
        <ListGroup.Item>
                   <span style={{fontWeight:'bold'}}> NFL This morning</span><br></br>
                   <span style={{fontSize:'small'}}>Vikings at Eagles</span>
        </ListGroup.Item>
        <ListGroup.Item>
        <span style={{fontWeight:"small",fontSize:11}}>Trending</span><br></br>
        <span style={{fontWeight:'bold'}}>#WorldOfMarkAntony</span>
        <span style={{fontWeight:'samll'}}>4,296 posts</span>
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Card>

        <Card style={{ width: '18rem',marginTop:5 }}>
        <Card.Title style={{alignItems:'center'}}> Who to follow</Card.Title>
        <ListGroup variant="flush">
        <ListGroup.Item>
        <div>  
        <div class="flex-shrink-0">
                            <Image height={40} width={40} src="https://play-lh.googleusercontent.com/xap8KnIygVoUPHju-Q1Qb9h2cDHAtobSjOgkhd-2wq3yCprCLdnSjDGXJr7Iruj6H5Q=w1052-h592-rw" roundedCircle />
                        </div>
                        <div class="flex-grow-1">
                            <span>Ramana</span> <br></br>
                            Aust 12th 2023
                        </div>
                        </div>  
        </ListGroup.Item>
        <ListGroup.Item>
        <span style={{fontWeight:"small",fontSize:11}}> Entertainment Trending</span>
        <span style={{fontWeight:'bold'}}>#WorldOfMarkAntony</span>
        <span style={{fontWeight:'samll'}}>4,296 posts</span>
        </ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Card>


        </>
    );
  }
  
  export default RightSide;