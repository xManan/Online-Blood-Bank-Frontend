import Container from 'react-bootstrap/Container'
import './BloodDonorCard.css'

function BloodDonorCard() {
    return (
        <Container className="blood-donor-container d-flex align-items-center">
            <span className="donor-blood-group bg-danger text-white fs-4 p-2">A+</span>
            <img src="/logo.png" />
            <Container>
                <h2>Blood Donor</h2>
                <p>City</p>
                <p>Pincode</p>
                <p>Email</p>
                <p>Contact</p>
            </Container>
        </Container>
    )
}


export default BloodDonorCard
