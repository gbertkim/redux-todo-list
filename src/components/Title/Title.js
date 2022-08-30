import React from 'react'
import '../../Styles/Title.scss'
import { useDispatch } from 'react-redux'
import { patchCompletedTodo } from '../../actions/actions'
const Title = React.forwardRef((props, ref) => {
    const dispatch = useDispatch()
    const editCompleted = async (id, completedTask) => {
        if (props.toggle === true) return
        try {
            let response = await fetch([props.BASE_URL, props.PATH, id].join('/'), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify({
                    completed: completedTask
                })
            })
            dispatch(patchCompletedTodo(id, completedTask))
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <h2 ref={ref} className='Title'
            style={{ textDecoration: props.completed ? 'line-through' : 'none' }}
            onClick={() => editCompleted(props.taskId, !props.completed)}
        >
            {props.title}
            {props.children}
        </h2>
    )
})

export default Title