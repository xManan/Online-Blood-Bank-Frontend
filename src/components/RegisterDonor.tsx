import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import './RegisterDonor.css'

function RegisterDonor() {
    return (
        <Container className="py-4 d-flex">
                <Container className="py-4">
                    <h1>Be A Donor</h1>
                    <br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="text" placeholder="Mobile No" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
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
                            <Link to="/login" className="mx-4">Already a donor ?</Link>
                        </div>
                    </Form>
                </Container>
                <Container className="be-donor-img d-flex align-items-center">
                    <img className="mx-4" src="/donor-art.jpeg" />
                </Container>
        </Container>
    )
}

export default RegisterDonor
