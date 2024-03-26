import Button from 'react-bootstrap/Button';

const ThemeButton = (props) => {
    return <Button href={props.href ?? ''} variant={props.variant ?? 'outline-primary'} size={props.size ?? 'sm'} className={props.className ?? ''} type={props.type ?? 'button'}>{props.text}</Button>;
}

export default ThemeButton;