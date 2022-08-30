import React from 'react'
import ListItem from '../ListItem/ListItem'
const Completed = (props) => {
  return (
    <ul className='lists completed'>
      {props.completedList.map(task => {
        return <ListItem key={task.id} taskId={task.id} title={task.title} completed={task.completed} BASE_URL={props.BASE_URL} PATH={props.PATH} />
      })}
    </ul>
  )
}

export default Completed