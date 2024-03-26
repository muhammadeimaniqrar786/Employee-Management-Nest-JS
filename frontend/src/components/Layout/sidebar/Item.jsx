const Item = ({ url, title }) => {
    return <>
        <li className='item'>
            <a href={url}>{title}</a>
        </li>
    </>;
}

export default Item;