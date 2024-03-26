import { Form } from "react-bootstrap";
import Label from "./Label";
import Input from "./Input";

const Group = ({ className, controlId, labelName, required = false, type = 'text', placeholder, extraContent, value, onChange, error }) => {
    return <>
        <Form.Group className={className} controlId={controlId}>
            <Label name={labelName} required={required} />
            <Input type={type} name={controlId} placeholder={placeholder} value={value} required={required} onChange={onChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {extraContent}
        </Form.Group>
    </>;
}

export default Group;