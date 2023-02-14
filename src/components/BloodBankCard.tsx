import Container from "react-bootstrap/Container"
import './BloodBankCard.css'

interface BloodBankCardProps {
    idx: number
    name: string
    address: string
    city: string
    state: string
    pincode: string
    mobile: string
    email: string
}

function BloodBankCard(props: BloodBankCardProps) {
    return (
        <Container className="blood-bank-container d-flex align-items-center">
            <img src="/logo.png" />
            <Container>
                <h2>{props.idx}. {props.name}</h2>
                <p>{props.address}</p>
                <p>{props.city}</p>
                <p>{props.state}</p>
                <p>{props.pincode}</p>
                <p>{props.mobile}</p>
                <p>{props.email}</p>
            </Container>
        </Container>
    )
}

export default BloodBankCard
