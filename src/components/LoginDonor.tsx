import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'

function LoginDonor() {
    return (
        <Container className="p-5">
            <Form className="mx-5">
                <h1 className="text-center mb-4">Login</h1>
                <Form.Group controlId="loginID" className="mb-4">
                    <Form.Control type="text" placeholder="Email or Mobile No" />
                </Form.Group>
                <Form.Group controlId="password" className="mb-4">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Container className="d-flex justify-content-center align-items-center">
                    <Button variant="danger" type="submit" className="px-4 py-2 my-3">Login</Button>
                    <Link to="/register" className="mx-3">Not Registered ?</Link>
                </Container>
            </Form>
        </Container>
    )
}

export default LoginDonor
