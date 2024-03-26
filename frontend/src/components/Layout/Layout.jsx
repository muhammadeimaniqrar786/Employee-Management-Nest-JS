import { Col, Container, Row } from "react-bootstrap";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ content }) => {
    return <>
        <Sidebar />
        <Container fluid>
            <Row>
                <Col md={{ offset: 2 }}>
                    <Header />
                    <main className="content">{content}</main>
                </Col>
            </Row>
        </Container>
    </>;
}

export default Layout;