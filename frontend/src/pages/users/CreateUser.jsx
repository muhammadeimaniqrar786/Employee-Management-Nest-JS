import { FaArrowLeft } from "react-icons/fa6";
import BreadCrumb from "../../components/Layout/BreadCrumb";
import PageTitle from "../../components/Layout/PageTitle";
import ThemeButton from "../../components/shared/ThemeButton";
import { Col, Container, Form, Row } from "react-bootstrap";
import Group from "../../components/shared/form/Group";
import ThemeAccordian from "../../components/shared/ThemeAccordian";

const CreateUser = () => {
    const pageTitle = 'Create New';

    const breadcrumbs = [
        {
            url: '/',
            name: 'Dashboard'
        },
        {
            url: '/users',
            name: 'Users'
        },
    ];

    const data = [
        {
            header: 'testing 001',
            body: 'lroensdbbkjsbk kjas dijabsdkjaj kjsdabos aijjs dsaijnd iha adjijb an sdikhkan ',
        },
        {
            header: 'testing 002',
            body: 'lroensdbbkjsbk kjas dijabsdkjaj kjsdabos aijjs dsaijnd iha adjijb an sdikhkan ',
        },
    ];

    return <>
        <BreadCrumb breadcrumbs={breadcrumbs} activeBreadcrumb={pageTitle} />
        <PageTitle title={pageTitle} actions={<ThemeButton href="/users" text={<><FaArrowLeft className="me-2" />Listing</>} />} />
        <Form>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Group className='mb-3' controlId='name' labelName='Name' placeholder='Name' required />
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='username' labelName='Username' placeholder='username' required />
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='email' labelName='email' placeholder='example@email.com' required type="email" />
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='password' labelName='Password' placeholder='********' required type="password" />
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='passwordConfirmation' labelName='Password Confirmation' placeholder='********' required type="password" />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <ThemeAccordian data={data} />
                    </Col>
                </Row>
            </Container>
        </Form>
    </>;
}

export default CreateUser;