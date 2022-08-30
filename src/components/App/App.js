import React, { useEffect, useState } from 'react'
import "../../Styles/App.scss"
import Form from '../Form/Form'
import Lists from '../Lists/Lists'
import { useSelector, useDispatch, useSubscribe } from 'react-redux'
import { setTodos } from '../../actions/actions'

const App = () => {
    const todos = useSelector(state => state.crudReducer)
    const dispatch = useDispatch()
    const BASE_URL = 'http://localhost:3000'
    const PATH = 'todos'
    const getList = async () => {
        try {
            const todos = await fetch([BASE_URL, PATH].join('/'))
            const todosJson = await todos.json();
            dispatch(setTodos(todosJson))
        } catch (e) {
            console.log(e)
        }
    }
    const updateTodos = (arr) => {
        setTodos(arr)
    }
    useEffect(() => {
        getList()
        console.log(todos)
    }, [])

    return (
        <div className='App'>
            <Form getList={getList} BASE_URL={BASE_URL} PATH={PATH} />
            <Lists todos={todos} setTodos={updateTodos} BASE_URL={BASE_URL} PATH={PATH} />
        </div>
    )
}

export default App

