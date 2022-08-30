import React from 'react'
import ListItem from '../ListItem/ListItem'
import { useSelector } from 'react-redux'
const Incomplete = (props) => {
  const todos = useSelector(state => state.crudReducer)
  return (
    todos.length < 1 ? (<span className='noActiveList'>no active task</span>) :
      <ul className='lists incomplete'>
        {props.incompleteList.map(task => {
          return <ListItem key={task.id} taskId={task.id} title={task.title} completed={task.completed} setTodos={props.setTodos} BASE_URL={props.BASE_URL} PATH={props.PATH} />
        })}
      </ul>
  )
}

export default Incomplete