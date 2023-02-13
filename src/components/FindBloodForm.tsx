import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BloodGroup from './BloodGroup'
import SelectState from './SelectState'
import './FindBloodForm.css'
import { useState, useEffect } from 'react'
import SelectCity from './SelectCity'
import { useNavigate } from 'react-router-dom'

function FindBloodForm() {
    const [blood, setBlood] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/find-donor', {
            state: {
                blood, state, city
            }
        })
    }
    return (
        <Form className="bg-trans-black">
            <Row className="field-container">
                <Col>
                    <Form.Group className="mb-3">
                        <BloodGroup value={blood} setBlood={setBlood} />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="field-container">
                <Col>
                    <Form.Group className="mb-3">
                        <SelectState value={state} setState={setState} />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group className="mb-3">
                        <SelectCity value={city} setCity={setCity} state={state} />
                    </Form.Group>
                </Col>
            </Row>
            <div className="find-btn-container d-flex">
                <Button variant="danger" className="mt-2" type="button" onClick={handleClick}>Find Blood</Button>
            </div>
        </Form>
    )
}

export default FindBloodForm
