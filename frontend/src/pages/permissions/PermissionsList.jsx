import { Col, Container, Row } from "react-bootstrap";
import BreadCrumb from "../../components/Layout/BreadCrumb";
import PageTitle from "../../components/Layout/PageTitle";
import ThemeButton from "../../components/shared/ThemeButton";
import ThemeTable from "../../components/shared/ThemeTable";

const PermissionsList = () => {
    const pageTitle = 'Permisisons List';

    const breadcrumbs = [
        {
            url: '/',
            name: 'Dashboard'
        }
    ];
    
    const headers = ['S.No', 'Name', 'Actions'];
    
    const data = [
        [
            {content: 1, className: 'text-center'},
            {content: 'name'},
            {content: 'action'},
        ],
        [
            {content: 2, className: 'text-center'},
            {content: 'name'},
            {content: 'action'},
        ]
    ];

    return <>
        <BreadCrumb breadcrumbs={breadcrumbs} activeBreadcrumb={pageTitle} />
        <PageTitle title={pageTitle} actions={<ThemeButton href="/permissions/create" text='Create New' />} />
        <Container className="mt-3">
            <Row>
                <Col>
                    <ThemeTable headers={headers} data={data} />
                </Col>
            </Row>
        </Container>
    </>;
};

export default PermissionsList;