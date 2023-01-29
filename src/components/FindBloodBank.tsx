import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import BloodBankCard from './BloodBankCard'
import './FindBloodBank.css'

function FindBloodBank() {
    return (
        <Container>
            <Form className="p-5 blood-bank-form">
                <h1 className="pb-4">Find Blood Banks Across India</h1>
                    <Form.Group className="">
                        <Form.Select id="select-state">
                            <option>Select State</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="">
                        <Form.Select id="select-state">
                            <option>Select District</option>
                        </Form.Select>
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
