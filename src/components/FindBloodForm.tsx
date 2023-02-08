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
                            <option>--Blood Group--</option>
                            <option>A-</option>
                            <option>A+</option>
                            <option>B-</option>
                            <option>B+</option>
                            <option>AB-</option>
                            <option>AB+</option>
                            <option>O-</option>
                            <option>O+</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect">
                            <option>Select State</option>
                            <option>Andaman and Nicobar Islands</option>
                            <option>Andhra Pradesh</option>
                            <option>Arunachal Pradesh</option>
                            <option>Assam</option>
                            <option>Bihar</option>
                            <option>Chandigarh</option>
                            <option>Chhattisgarh</option>
                            <option>Dadra and Nagar Haveli</option>
                            <option>Delhi</option>
                            <option>Goa</option>
                            <option>Gujarat</option>
                            <option>Haryana</option>
                            <option>Himachal Praddesh</option>
                            <option>Himachal Pradesh</option>
                            <option>Jammu and Kashmir</option>
                            <option>Jharkhand</option>
                            <option>Karnataka</option>
                            <option>Kerala</option>
                            <option>Madhya Pradesh</option>
                            <option>Maharashtra</option>
                            <option>Manipur</option>
                            <option>Meghalaya</option>
                            <option>Mizoram</option>
                            <option>Nagaland</option>
                            <option>Odisha</option>
                            <option>Puducherry</option>
                            <option>Punjab</option>
                            <option>Rajasthan</option>
                            <option>Tamil Nadu</option>
                            <option>Telangana</option>
                            <option>Tripura</option>
                            <option>Uttar Pradesh</option>
                            <option>Uttarakhand</option>
                            <option>West Bengal</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="field-container">
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect" disabled>
                            <option>Select District</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Select id="disabledSelect" disabled>
                            <option>All Tehasil</option>
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
