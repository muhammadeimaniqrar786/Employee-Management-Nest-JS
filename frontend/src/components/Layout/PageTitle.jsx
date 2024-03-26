import { Col, Container, Row } from "react-bootstrap";

const PageTitle = ({ title, actions }) => {
    return <>
        <Container>
            <Row>
                <Col md={8}>
                    <h2>{title ?? 'Page Title'}</h2>
                </Col>
                <Col md={4} style={{ textAlign: 'right' }}>{actions ?? ''}</Col>
            </Row>
        </Container>
    </>;
}

export default PageTitle;