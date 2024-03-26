import { Form } from "react-bootstrap";

const Input = ({ type, name, placeholder, required, value, onChange }) => {
    return <>
        <Form.Control type={type} name={name} placeholder={placeholder} {...(required ? { required: true } : {})} value={value} onChange={onChange} ></Form.Control>
    </>;
}

export default Input;