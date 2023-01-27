import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BloodBtn from './BloodBtn'
import './TotalDonors.css'

function TotalDonors() {
    return (
        <div className="total-donors-section">
            <Container className="text-center">
                <h2 className="total-donors-title">
                    Total Blood Donors Registered With Blood4you
                </h2>
                <br />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <BloodBtn blood-grp="A-" count={121} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="A+" count={72} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="AB+" count={90} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="AB-" count={170} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BloodBtn blood-grp="B-" count={68} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="B+" count={227} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="O-" count={20} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="O+" count={11} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default TotalDonors
