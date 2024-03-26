import { Form } from "react-bootstrap";

const Label = ({ name, required }) => {
    return <>
        <Form.Label>{name} {required ? <span className='text-danger'>*</span> : ''} </Form.Label>
    </>;
}

export default Label;