import { Col, Container, Row } from "react-bootstrap";
import ThemeButton from "../shared/ThemeButton";

const Header = () => {
    return <>
        <Container className="p-2">
            <Row>
                <Col md={{ span: 2, offset: 10 }} style={{textAlign: 'right'}}>
                    <ThemeButton text="Login" className="me-2" href="/auth/login" />
                    <ThemeButton text="Register" href="/auth/register" />
                </Col>
            </Row>
        </Container>
    </>
}

export default Header;