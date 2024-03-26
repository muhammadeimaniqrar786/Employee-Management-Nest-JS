import { Form } from "react-bootstrap";

const Text = ({ className, message }) => {
    return <>
        <Form.Text className={className}>{message}</Form.Text>
    </>;
}

export default Text;