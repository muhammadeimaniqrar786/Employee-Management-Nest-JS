import { FaArrowLeft } from "react-icons/fa6";
import BreadCrumb from "../../components/Layout/BreadCrumb";
import PageTitle from "../../components/Layout/PageTitle";
import ThemeButton from "../../components/shared/ThemeButton";
import { Col, Container, Form, Row } from "react-bootstrap";
import Group from "../../components/shared/form/Group";

const CreateRole = () => {
    const pageTitle = 'Create New';

    const breadcrumbs = [
        {
            url: '/',
            name: 'Dashboard'
        },
        {
            url: '/roles',
            name: 'Roles'
        },
    ];

    return <>
        <BreadCrumb breadcrumbs={breadcrumbs} activeBreadcrumb={pageTitle} />
        <PageTitle title={pageTitle} actions={<ThemeButton href="/roles" text={<><FaArrowLeft className="me-2" />Listing</>} />} />
        <Form>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Group className='mb-3' controlId='name' labelName='Name' placeholder='Name' required />
                    </Col>
                </Row>
            </Container>
        </Form>
    </>;
}

export default CreateRole;