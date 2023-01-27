import Container from "react-bootstrap/Container"
import './BloodBankCard.css'

function BloodBankCard() {
    return (
        <Container className="blood-bank-container d-flex align-items-center">
            <img src="../../public/logo.png" />
            <Container>
                <h2>1. Blood Bank</h2>
                <p>Address</p>
                <p>District</p>
                <p>City</p>
                <p>State</p>
                <p>Pincode</p>
                <p>Email</p>
            </Container>
        </Container>
    )
}

export default BloodBankCard
