import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './FindBloodForm.css'

function FindBloodForm() {
    return (
        <Form className="bg-trans-black">
            <Row className="field-container">
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect">
                            <option>Blood Group</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect">
                            <option>Select State</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="field-container">
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect">
                            <option>Select District</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect">
                            <option>All Tehsil</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <div className="find-btn-container d-flex">
                <Button variant="danger" className="mt-2" type="submit">Find Blood</Button>
            </div>
        </Form>
    )
}

export default FindBloodForm
