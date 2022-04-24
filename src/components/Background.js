import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from '../assets/images/instacart-bkgrd.png'



const Background = () => {
    return ( 
        <div>
            <Card style={{backgroundColor: "#deedd6"}}className="">
                
                <Card.Body>
                    <Container>
                    <Row>
                        <Col sm={8}>
                            <Card.Title>
                                <h1 style={{ fontSize: "3rem" }}>Order groceries for delivery or pickup today</h1>                 
                            </Card.Title>
                            <Card.Text>
                            <p className="text-left">Whatever you want from local stores, brought right to your door.</p>
                            </Card.Text>
                        </Col>
                        <Col sm={4}>
                            <Card.Img className="img-right" src={Image} />
                        </Col>
                    </Row>
                    
                    </Container>
                
                </Card.Body>
            </Card>

        </div>
     );
}
 
export default Background;

