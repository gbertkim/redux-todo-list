import React from 'react'
import '../../Styles/DeleteButton.scss'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../../actions/actions'
const DeleteButton = (props) => {
    const dispatch = useDispatch()
    let todos = useSelector(state => state.todos)

    const deleteTask = async (id) => {
        try {
            let response = fetch([props.BASE_URL, props.PATH, id].join('/'), {
                method: 'DELETE',
            })
            let newTodos = dispatch(deleteTodo(id))
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <button className='deleteButton' onClick={() => deleteTask(props.taskId)}><svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="DeleteIcon" aria-label="fontSize small"><path fill="#ffffff" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg></button>
    )
}

export default DeleteButton