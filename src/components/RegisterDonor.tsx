import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import BloodGroup from './BloodGroup'
import SelectState from './SelectState'
import './RegisterDonor.css'
import { useState } from 'react'
import SelectCity from './SelectCity'
import Spinner from 'react-bootstrap/Spinner'
import Notification from './Notification'

interface Donor {
    full_name: string
    mobile: string
    email: string
    password: string
    blood_grp: string
    state: string
    city: string
    pincode: string
}

function RegisterDonor() {
    const [fullName, setFullName] = useState("")
    const [mobile, setMobile] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [blood, setBlood] = useState("")
    const [state, setState] = useState("state")
    const [city, setCity] = useState("")
    const [pincode, setPincode] = useState("")
    const [registering,setRegistering] = useState(false)
    const [notify, setNotify] = useState(false)
    const [status, setStatus] = useState('')
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState('')
    const handleClick = async (e: React.FormEvent<HTMLButtonElement>) => {
        setRegistering(true)
        const user: Donor = {
            full_name: fullName,
            mobile,
            email,
            password,
            blood_grp: blood,
            state,
            city,
            pincode,
        }
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/register-donor`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        if(response.status >= 200 && response.status <= 299){
            setStatus('Succes')
            setVariant('success')
            setMessage('Successfully Registered')
            setFullName('')
            setMobile('')
            setEmail('')
            setPassword('')
            setBlood('')
            setState('')
            setCity('')
            setPincode('')
        } else {
            setStatus('failed')
            setVariant('danger')
            setMessage(JSON.stringify(await response.json()))
        }
        setRegistering(false)
        setNotify(true)
    }
    return (
        <Container className="py-4 d-flex">
            <Notification 
                show={notify} 
                setShow={setNotify} 
                status={status}
                message={message}
                variant={variant}

            />
            <Container className="py-4">
                <h1>Be A Donor</h1>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="full-name">
                        <Form.Control 
                            type="text" 
                            placeholder="Full Name" 
                            value={fullName} 
                            onChange={(e) => setFullName(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="mobile">
                        <Form.Control 
                            type="text" 
                            placeholder="Mobile No" 
                            value={mobile} 
                            onChange={(e) => setMobile(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Control 
                            type="email" 
                            placeholder="E-mail" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="blood-grp">
                        <BloodGroup value={blood} setBlood={setBlood} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="state">
                        <SelectState value={state} setState={setState} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="city">
                        <SelectCity value={city} state={state} setCity={setCity} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="pincode">
                        <Form.Control 
                            type="text" 
                            placeholder="Pincode" 
                            value={pincode} 
                            onChange={(e) => setPincode(e.target.value)} 
                        />
                    </Form.Group>
                    <br />
                    <div>
                        <Button variant="danger" type="button" onClick={handleClick} >
                            {registering ? <Spinner animation='border'></Spinner> : 'Submit'}
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
