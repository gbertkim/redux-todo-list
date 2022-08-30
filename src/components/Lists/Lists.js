import React from 'react'
import Incomplete from '../Incomplete/Incomplete'
import Completed from '../Completed/Completed'
import { useSelector } from 'react-redux'
import '../../Styles/Lists.scss'
const Lists = (props) => {
  const todos = useSelector(state => state.crudReducer)
  let incompleteList = []
  let completedList = todos.filter(task => {
    if (task.completed === true) {
      return task
    } else {
      incompleteList.push(task)
    }
  })
  return (
    <section className='ListsSection'>
      <Incomplete incompleteList={incompleteList} BASE_URL={props.BASE_URL} PATH={props.PATH} />
      <Completed completedList={completedList} BASE_URL={props.BASE_URL} PATH={props.PATH} />
    </section>
  )
}

export default Lists