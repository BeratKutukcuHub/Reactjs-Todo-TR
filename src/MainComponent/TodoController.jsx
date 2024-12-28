


import React from 'react'
import Form from '../Component/Form'
import TodoList from '../Component/TodoList'
import Navbar from '../BarComponent/Navbar'
import DeleteList from '../Component/DeleteList'
import FilterPush from '../Component/FilterPush'

function TodoController() {
  return (
    <div>
        <Navbar/>
        <Form/>
        <FilterPush/>
        <TodoList/>
        
    </div>
  )
}

export default TodoController