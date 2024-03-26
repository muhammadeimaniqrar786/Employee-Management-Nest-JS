import BrandConfig from '../../utils/BrandConfig';
import { FaAnglesLeft, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import Item from './sidebar/Item';
import Heading from './sidebar/Heading';

const Sidebar = () => {
    const toggleDropdown = (event) => {
        event.currentTarget.closest('li').classList.toggle('active');
    }

    return (
        <>
            <div className="sidebar">
                <div className="logo">
                    <a href="/">{BrandConfig.name}</a>
                </div>
                <ul>
                    <Heading title='Menu' />
                    <li className='dropdown'>
                        <span className='title' onClick={toggleDropdown} >
                            Task Management
                            <FaChevronDown className='chevron-down' />
                            <FaChevronUp className='chevron-up' />
                        </span>
                        <ul>
                            <Item title='List' url='tasks' />
                            <Item title='Add New' url='tasks/create' />
                        </ul>
                    </li>
                    <Heading title='Administration' />
                    <li className='dropdown'>
                        <span className='title' onClick={toggleDropdown} >
                            User Management
                            <FaChevronDown className='chevron-down' />
                            <FaChevronUp className='chevron-up' />
                        </span>
                        <ul>
                            <Item title='List' url='users' />
                            <Item title='Add New' url='users/create' />
                            <li className='dropdown'>
                                <span className='title' onClick={toggleDropdown} >
                                    Roles
                                    <FaChevronDown className='chevron-down' />
                                    <FaChevronUp className='chevron-up' />
                                </span>
                                <ul>
                                    <Item title='List' url='roles' />
                                    <Item title='Add New' url='roles/create' />
                                </ul>
                            </li>
                            <li className='dropdown'>
                                <span className='title' onClick={toggleDropdown} >
                                    Permissions
                                    <FaChevronDown className='chevron-down' />
                                    <FaChevronUp className='chevron-up' />
                                </span>
                                <ul>
                                    <Item title='List' url='permissions' />
                                    <Item title='Add New' url='permissions/create' />
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
