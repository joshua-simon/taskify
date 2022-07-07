import React, {FC} from 'react'
import './styles.css'

interface Props {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
}

const InputField:FC<Props> = ({ todo, setTodo }):JSX.Element => {
    console.log(todo)
    return(
        <form className="input">
            <input 
                value = {todo}
                onChange = {(e) => setTodo(e.target.value)}
                type = 'input' 
                placeholder="enter a task" 
                className="input__box"
            />
            <button className="input__submit">Go</button>
        </form>
    )
}

export default InputField

