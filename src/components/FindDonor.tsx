import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function FindDonor() {
    return (
        <Container>
            <Form>
                <Container className="px-0 d-flex">
                    <Form.Group className="mb-3">
                        <Form.Label>Blood Group <span className="text-danger">*</span></Form.Label>
                        <Form.Select disabled>
                            <option>Disabled select</option>
                        </Form.Select>
                    </Form.Group>
                </Container>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default FindDonor
