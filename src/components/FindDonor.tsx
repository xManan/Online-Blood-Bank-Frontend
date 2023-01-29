import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BloodDonorCard from './BloodDonorCard'
import './FindDonor.css'

function FindDonor() {
    return (
        <Container className="my-5">
            <h1>Find Donor</h1>
            <Form className="find-donor-form p-5 my-5">
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Blood Group <span className="text-danger">*</span></Form.Label>
                            <Form.Select className="find-donor-select">
                                <option>--Blood Group--</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <Form.Select disabled>
                                <option>Select State</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <Form.Select disabled>
                                <option>Select District</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Tehasil</Form.Label>
                            <Form.Select disabled>
                                <option>All Tehasil</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Container className="px-0 my-4 d-flex justify-content-center">
                    <Button variant="danger" type="submit" className="px-4 py-2">
                        SEARCH
                    </Button>
                </Container>
            </Form>
            <Container>
                <Row>
                    <Col>
                        <BloodDonorCard />
                    </Col>
                    <Col>
                        <BloodDonorCard />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <BloodDonorCard />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FindDonor
