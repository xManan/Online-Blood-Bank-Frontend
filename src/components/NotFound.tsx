import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
    return (
        <Container className="text-center not-found-container">
            <h1>404 Not Found</h1>
            <Link to='/'>Go back to Home</Link>
        </Container>
    )
}

export default NotFound
