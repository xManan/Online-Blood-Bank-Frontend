import Container from 'react-bootstrap/Container'
import './AboutUs.css'

function AboutUs() {
    return (
        <Container className="d-flex about-us-container my-5">
            <img className="mx-4" src="../../public/logo.png" />
            <Container className="mx-4">
                <h1>Blood<span className="text-danger">4</span>you</h1>
                <br />
                <p className="text-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur consequatur facere consequuntur, neque praesentium, explicabo repellat perferendis reprehenderit debitis assumenda voluptate impedit tempore dolores eveniet earum at quidem atque quibusdam dignissimos? Iusto rerum autem accusantium fugiat officia! Quibusdam maiores, quidem quasi tempore repudiandae modi quae velit nostrum architecto exercitationem aut, possimus nemo delectus esse. Neque excepturi a ratione, tempore, natus necessitatibus iusto vitae quisquam illo culpa sapiente veritatis maxime cum. Corporis hic vero ullam dolore expedita commodi cum nesciunt nihil, at ipsa praesentium est culpa eos voluptatum corrupti molestias! Ratione sed molestiae hic facilis porro ducimus, aut deserunt minus?
                </p>
            </Container>
        </Container>
    )
}

export default AboutUs
