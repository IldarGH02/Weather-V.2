import { FormControl } from "react-bootstrap"

const InputUi = (props) => {
    return (
        <FormControl 
            className={props.className} 
            onChange={props.onChange} 
            value={props.value}
            placeholder={props.placeholder}
        />
    )
}

export default InputUi