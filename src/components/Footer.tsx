import Container from 'react-bootstrap/Container'
import './Footer.css'

function Footer() {
    return (
        <div className="bg-dark py-5 footer">
            <Container className="text-light">
                <h2 className="mt-5">CONTACT US</h2>
                <p className="mt-3 mb-5">blood4you@gmail.com</p>
                <hr />
            </Container>
        </div>
    )
}

export default Footer
