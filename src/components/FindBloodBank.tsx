import {useState} from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import BloodBankCard from './BloodBankCard'
import SelectState from './SelectState'
import './FindBloodBank.css'
import SelectCity from './SelectCity'

function FindBloodBank() {
    const [state,setState] = useState("")
    const [city,setCity] = useState("")
    return (
        <Container>
            <Form className="p-5 blood-bank-form">
                <h1 className="pb-4">Find Blood Banks Across India</h1>
                    <Form.Group className="">
                        <SelectState value={state} setState={setState} />
                    </Form.Group>
                    <Form.Group className="">
                        <SelectCity state={state} setCity={SelectCity} value={city}/>
                    </Form.Group>
                    <Button variant="danger" className="px-4 py-2">Search</Button>
            </Form>
            <Container className="mb-5">
                <BloodBankCard />
                <BloodBankCard />
                <BloodBankCard />
            </Container>
        </Container>
    )
}

export default FindBloodBank
