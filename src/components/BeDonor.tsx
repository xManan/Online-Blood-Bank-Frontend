import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'
import './BeDonor.css'

function BeDonor() {
    return (
        <Container className="p-5">
            <Row>
                <Col className="p-4">
                    <h1>Be A Donor</h1>
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Mobile No" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option>Blood Group</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option>Select State</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option>Select City</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Select>
                                <option>Select Tehasil</option>
                            </Form.Select>
                        </Form.Group>
                        <br />
                        <div>
                            <Button variant="danger" type="submit" >
                                Submit
                            </Button>
                            <Link to="/already-a-donor" className="mx-4">Already a donor ?</Link>
                        </div>
                    </Form>
                </Col>
                <Col className="p-4">
                    <img src="../../public/donor-art.jpeg" />
                </Col>
            </Row>
        </Container>
    )
}

export default BeDonor
