import { Col, Container, Row } from "react-bootstrap"

const NotFound = () => {
    return <>
        <Container fluid>
            <Row className="vh-100">
                <Col className="text-center m-auto">
                    <h1>404</h1>
                    <h4>Page Not Found!</h4>
                </Col>
            </Row>
        </Container>
    </>
}

export default NotFound