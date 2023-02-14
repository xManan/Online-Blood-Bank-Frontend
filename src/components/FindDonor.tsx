import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BloodDonorCard from './BloodDonorCard'
import BloodGroup from './BloodGroup'
import SelectState from './SelectState'
import './FindDonor.css'
import { useEffect, useState } from 'react'
import SelectCity from './SelectCity'
import Spinner from 'react-bootstrap/Spinner'
import { useLocation } from 'react-router-dom'

function FindDonor() {
    const data = useLocation()
    const [blood, setBlood] = useState(data.state ? data.state.blood : "")
    const [state, setState] = useState(data.state ? data.state.state : "")
    const [city, setCity] = useState(data.state ? data.state.city : "")
    const [donors, setDonors] = useState([])
    const [searching, setSearching] = useState(false)
    const handleClick = async () => {
        console.log("fetching...")
        if (!blood.length) {
            console.log("provide blood")
            return
        }
        setSearching(true)
        const query = { blood_grp: blood, state, city }
        // console.log(import.meta.env.VITE_API_BASE_URL)
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/find-donors`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        })
        setSearching(false)
        if (response.status >= 200 && response.status <= 299) {
            const data = await response.json()
            setDonors(data.donors)
            console.log(donors)
        }
    }
    useEffect(() => {
        if (data.state != null) {
            handleClick()
        }
    }, [])
    return (
        <Container className="my-5">
            <h1>Find Donor</h1>
            <Form className="find-donor-form p-5 my-5">
                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Blood Group <span className="text-danger">*</span></Form.Label>
                            <BloodGroup value={blood} setBlood={setBlood} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>State</Form.Label>
                            <SelectState value={state} setState={setState} />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>District</Form.Label>
                            <SelectCity value={city} setCity={setCity} state={state} />
                        </Form.Group>
                    </Col>
                </Row>
                <Container className="px-0 my-4 d-flex justify-content-center">
                    <Button variant="danger" type="button" onClick={handleClick} className="px-4 py-2">
                        {searching ? <Spinner animation='border'></Spinner> : 'SEARCH'}
                    </Button>
                </Container>
            </Form>
            <Container>
                <Row>
                    {donors.map(donor => (
                        <Col>
                            <BloodDonorCard donor={donor} />
                        </Col>
                    ))}
                    <Col></Col>
                </Row>
            </Container>
        </Container>
    )
}

export default FindDonor
