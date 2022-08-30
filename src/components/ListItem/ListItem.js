import React, { useState } from 'react'
import Title from '../Title/Title'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'
import '../../Styles/ListItem.scss'
import { useSelector, useDispatch } from 'react-redux'
import { setTodos, patchTodo } from '../../actions/actions'
const ListItem = (props) => {
    const todos = useSelector(state => state.crudReducer)
    const [newTitle, setNewTitle] = useState('')
    let [toggle, setToggle] = useState(false)
    const dispatch = useDispatch()
    const patchTask = async (id) => {
        try {
            let response = await fetch([props.BASE_URL, props.PATH, id].join('/'), {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify({
                    title: newTitle
                })
            })
            dispatch(patchTodo(id, newTitle))
        } catch (e) {
            console.log(e)
        }
    }
    const editHandler = () => {
        if (toggle === false) {
            setToggle(!toggle)
        } else {
            patchTask(props.taskId)
            setNewTitle(newTitle)
            setToggle(!toggle)
        }
    }
    const inputHandler = (e) => {
        e.stopPropagation()
        setNewTitle(e.target.value)
    }
    return (
        <li className='ListItem'>
            <Title toggle={toggle} taskId={props.taskId} title={props.title} completed={props.completed} BASE_URL={props.BASE_URL} PATH={props.PATH} >
                {toggle ? <input type='text' htmlFor='editTask' className='editTask' placeholder={props.title} onChange={inputHandler} /> : <></>}
            </Title>

            <div className='ListItem--wrapper'>
                <EditButton editHandler={editHandler} taskId={props.taskId} BASE_URL={props.BASE_URL} PATH={props.PATH} />
                <DeleteButton taskId={props.taskId} BASE_URL={props.BASE_URL} PATH={props.PATH} />
            </div>
        </li>
    )
}

export default ListItem