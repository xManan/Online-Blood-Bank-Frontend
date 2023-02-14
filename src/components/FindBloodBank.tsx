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
    const [banks, setBanks] = useState([])
    const handleClick = async () => {
        console.log('fet')
        if(!state.length){
            return
        }
        let response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/find-blood-bank`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({state,city})
        })
        const data = await response.json()
        setBanks(data.banks)
    }
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
                    <Button variant="danger" type="button" onClick={handleClick} className="px-4 py-2">Search</Button>
            </Form>
            <Container className="mb-5">
                {banks.map((bank, idx) => (
                    <BloodBankCard 
                        idx={idx+1}
                        name={bank.name} 
                        address={bank.address} 
                        city={bank.city} 
                        state={bank.state} 
                        pincode={bank.pincode} 
                        email={bank.email} 
                        mobile={bank.mobile} 
                    />
                ))}
            </Container>
        </Container>
    )
}

export default FindBloodBank
