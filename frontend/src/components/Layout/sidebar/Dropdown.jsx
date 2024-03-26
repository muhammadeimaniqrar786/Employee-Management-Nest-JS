import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Item from "./Item";

const Dropdown = ({ title, list, subDropdown = null }) => {
    console.log("🚀 ~ Dropdown ~ list:", list)

    const toggleDropdown = (event) => {
        event.currentTarget.closest('li').classList.toggle('active');
    }

    return <>
        <li className='dropdown'>
            <span className='title' onClick={toggleDropdown} >
                {title}
                <FaChevronDown className='chevron-down' />
                <FaChevronUp className='chevron-up' />
            </span>
            <ul>
                {list.map((item) => (
                    item.title !== undefined ? <Item index={item.key} title={item.title} /> : ''
                ))}
                {/* {subDropdown ?? ''}
                {console.log("🚀 ~ Dropdown ~ subDropdown:", subDropdown)} */}
            </ul>
        </li>
    </>;
}

export default Dropdown;