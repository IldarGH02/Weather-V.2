import { Button } from "react-bootstrap"

const ButtonUi = (props) => {
    return (
        <Button className={props.className} onClick={props.onClick}>{props.body}</Button>
    )
}

export default ButtonUi