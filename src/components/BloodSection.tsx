import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FindBloodForm from './FindBloodForm'
import RoundedBtn from './RoundedBtn'

import './BloodSection.css'

function BloodSection() {
    return (
        <div className="blood-section">
            <Container>
                <Row className="form-btn-container">
                    <Col>
                        <FindBloodForm />
                    </Col>
                    <Col>
                        <p className="tag-line text-white text-center fs-4"><b>Donate Blood</b> Give The Gift Of Life</p>
                        <Row className="rounded-btn-container">
                            <Col className="d-flex justify-content-center">
                                <RoundedBtn title="Request Blood" icon="/drop-of-blood-96.png" color="red" />
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <RoundedBtn title="Find Blood Donor" icon="/customer-96.png" color="black" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BloodSection
