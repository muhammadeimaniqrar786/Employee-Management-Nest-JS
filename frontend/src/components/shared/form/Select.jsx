import { Form } from "react-bootstrap";

const Select = ({ options }) => {
    return <>
        <Form.Select>
            {options.map((option, index) => {
                return <option value={option.value}>{option.text}</option>
            })}
        </Form.Select>
    </>;
}

export default Select;