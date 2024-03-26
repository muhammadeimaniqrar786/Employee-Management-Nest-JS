import Breadcrumb from 'react-bootstrap/Breadcrumb';

const BreadCrumb = ({ breadcrumbs, activeBreadcrumb }) => {
    return <>
        <Breadcrumb>
            {breadcrumbs.map((breadcrumb, index) => {
                return <Breadcrumb.Item key={index} href={breadcrumb.url}>{breadcrumb.name}</Breadcrumb.Item>
            })}
            <Breadcrumb.Item active>{activeBreadcrumb}</Breadcrumb.Item>
        </Breadcrumb>
    </>;
};

export default BreadCrumb;