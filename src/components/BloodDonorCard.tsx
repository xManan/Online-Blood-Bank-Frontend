import Container from 'react-bootstrap/Container'
import './BloodDonorCard.css'

interface BloodDonorCardProps {
    donor: {
        __v: number
        _id: string
        full_name: string
        blood_grp: string
        email: string
        mobile: string
        password: string
        city: string
        state: string
        pincode: string
    }
}

function BloodDonorCard(props: BloodDonorCardProps) {
    return (
        <Container className="blood-donor-container d-flex align-items-center">
            <span className="donor-blood-group bg-danger text-white fs-4 p-2">{props.donor.blood_grp}</span>
            <img src="/logo.png" />
            <Container>
                <h2>{props.donor.full_name}</h2>
                <p>{props.donor.city}</p>
                <p>{props.donor.pincode}</p>
                <p>{props.donor.email}</p>
                <p>{props.donor.mobile}</p>
            </Container>
        </Container>
    )
}


export default BloodDonorCard
