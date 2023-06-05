import ButtonUi from "ui/ButtonUi"
import InputUi from "ui/InputUi"

const Form = ({value, handleClick, handleChange}) => {
    return (
        <form className="weather__form">
            <InputUi
                className='form__input'
                onChange={handleChange}
                value={value}
                placeholder='Введите город'
            />
            <ButtonUi
                className='form__send button'
                onClick={handleClick}
                body='Отправить'
            />
        </form>
    )
}

export default Form