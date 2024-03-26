import { FaArrowLeft } from "react-icons/fa6";
import BreadCrumb from "../../components/Layout/BreadCrumb";
import PageTitle from "../../components/Layout/PageTitle";
import ThemeButton from "../../components/shared/ThemeButton";
import { Col, Container, Form, Row } from "react-bootstrap";
import Group from '../../components/shared/form/Group';
import Select from "../../components/shared/form/Select";
import Label from "../../components/shared/form/Label";

const CreateTask = () => {
    const pageTitle = 'Create New';

    const breadcrumbs = [
        {
            url: '/',
            name: 'Dashboard'
        },
        {
            url: '/tasks',
            name: 'Tasks'
        },
    ];

    const assignerOptions = [
        {
            text: 'Select Assigner'
        },
        {
            value: 1,
            text: 'First Assigner'
        },
    ];

    const statusOptions = [
        {
            text: 'Select Status'
        },
        {
            value: 'inactive',
            text: 'Inactive'
        },
        {
            value: 'pending',
            text: 'Pending'
        },
        {
            value: 'inprocess',
            text: 'Inprocess'
        },
        {
            value: 'completed',
            text: 'Completed'
        },
    ];

    return <>
        <BreadCrumb breadcrumbs={breadcrumbs} activeBreadcrumb={pageTitle} />
        <PageTitle title={pageTitle} actions={<ThemeButton href="/tasks" text={<><FaArrowLeft className="me-2" />Listing</>} />} />
        <Form>
            <Container className="mt-3">
                <Row>
                    <Col md={4}>
                        <Group className='mb-3' controlId='name' labelName='Name' required={true} placeholder='Name'></Group>
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='start_date' labelName='Start Date' required={true} type="date" value='2024-02-21'></Group>
                    </Col>
                    <Col md={4}>
                        <Group className='mb-3' controlId='end_date' labelName='End Date' required={true} type="date" value='2024-02-26'></Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="assigner">
                            <Form.Label>Assigner</Form.Label>
                            <Select options={assignerOptions} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="status">
                            <Form.Label>Status</Form.Label>
                            <Select options={statusOptions} />
                        </Form.Group>
                    </Col>
                    <Col md={4}>
                        <Form.Group className="mb-3" controlId="media">
                            <Label name='Media' required={true} />
                            <Form.Control type="file" required multiple></Form.Control>
                        </Form.Group>
                    </Col>
                    <Col xs={12} style={{textAlign: 'right'}}>
                        <ThemeButton variant="outline-success" text="Create New" type='submit' />
                    </Col>
                </Row>
            </Container>
        </Form>
    </>;
};

export default CreateTask;