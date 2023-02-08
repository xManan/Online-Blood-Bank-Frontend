import Container from 'react-bootstrap/Container'
import './AboutSection.css'

function AboutSection() {
    return (
        <Container className=" about-section p-5">
            <div className="text-center p-4">
                <h1>Who Are We?</h1>
                <br />
                <p className="fs-5">
                    We are humans helping humans to overcome problem of blood
                    shortage. We are members from different Cast and Creed,
                    united by the common cause of saving lives.
                </p>
            </div>
            <div className="blood-donation-img-container">
                <img src="/blood-donation.jpeg" />
            </div>
        </Container>
    )
}

export default AboutSection
