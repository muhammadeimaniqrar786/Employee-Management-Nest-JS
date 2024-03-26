import { Table } from "react-bootstrap";

const ThemeTable = ({ headers, data }) => {
    return <>
        <Table striped bordered hover>
            <thead>
                <tr className="text-center">
                    {headers.map((header, index) => {
                        return <th key={index}>{header}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((item) => {
                    return <tr>
                        {item.map((content, index) => {
                            return <td key={index} colSpan={content.colSpan ?? ''} className={content.className ?? ''}>{content.content}</td>
                        })}
                    </tr>
                })}
            </tbody>
        </Table>
    </>;
}

export default ThemeTable;