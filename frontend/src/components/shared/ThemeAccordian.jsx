import { Accordion } from "react-bootstrap";

const ThemeAccordian = ({ data }) => {
    return <>
        <Accordion>
            {data.map((item, index) => {
                return <Accordion.Item eventKey={index} key={index}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            })}
        </Accordion>
    </>;
}

export default ThemeAccordian;