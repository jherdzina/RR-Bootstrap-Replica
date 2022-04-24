import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import AldiImage from '../assets/images/aldi-logo.png'
import SchnucksImage from '../assets/images/schnucks-logo.png'
import MeijerImage from '../assets/images/meijer-logo.png'
import CostcoImage from '../assets/images/costco-logo.png'
import WoodmansImage from '../assets/images/woodmans-logo.png'
import TargetImage from '../assets/images/target-logo.png'



const StoreListing = () => {
    return ( 
        <div>
            <h2 className="text-center">Choose your store in Rockford, IL</h2>
            <Container style={{ marginTop: "40px", textAlign: "center", display: "flex"}}>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src={AldiImage} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5">
                            <Image src={SchnucksImage} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Schnucks</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row >
                        <Col xs=".5" >
                            <Image src={MeijerImage} roundedCircle />
                        </Col>
                        <Col >
                            <h5 style={{ fontWeight: "bold" }}>Meijer</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                </Row>
                <Row style={{ borderBottom: "1px solid #E8E9EB", display: "flex", justifyContent: "space-evenly"}} >
                    <Row>
                        <Col xs=".5" >
                            <Image src={CostcoImage} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5" >
                            <Image src={WoodmansImage} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Woodmans</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                    <Row>
                        <Col xs=".5" >
                            <Image src={TargetImage} roundedCircle />
                        </Col>
                        <Col>
                            <h5 style={{ fontWeight: "bold" }}>Target</h5>
                            <p>Delivery * Pickup</p>
                        </Col>
                    </Row>
                    <Col sm="1"></Col>
                </Row>
            </Container>

        </div>
     );
}
 
export default StoreListing;