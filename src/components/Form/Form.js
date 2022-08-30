import React, { useEffect, useState, useRef } from 'react'
import "../../Styles/Form.scss"
const Form = (props) => {
  const inputRef = useRef()
  const formRef = useRef()

  const postTask = async (searchVal) => {
    try {
      const response = await fetch([props.BASE_URL, props.PATH].join('/'), {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
          title: searchVal,
          completed: false
        })
      })
      props.getList()
    } catch (e) {
      console.log(e)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let searchVal = inputRef.current.value
    postTask(searchVal);
    formRef.current.reset();
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className='Form'>
      <input ref={inputRef} className='Form--input' type='text' name='task' id='task' htmlFor='task' required />
      <button className='Form--button' type='submit'>Submit</button>
    </form>
  )
}
export default Form