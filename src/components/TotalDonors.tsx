import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BloodBtn from './BloodBtn'
import './TotalDonors.css'
import { useNavigate } from 'react-router-dom'

function TotalDonors() {
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        navigate('/find-donor', {
            state: {
                blood: e.currentTarget.value,
                state: '',
                city: '',
            }
        })
    }
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
                            <BloodBtn blood-grp="A-" count={121} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="A+" count={72} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="AB+" count={90} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="AB-" count={170} handleClick={handleClick} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <BloodBtn blood-grp="B-" count={68} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="B+" count={227} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="O-" count={20} handleClick={handleClick} />
                        </Col>
                        <Col>
                            <BloodBtn blood-grp="O+" count={11} handleClick={handleClick} />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default TotalDonors
