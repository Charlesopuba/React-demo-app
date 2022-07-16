import React,{useState} from 'react'
import Todoform from './Todoform'

function Todolist() {
    const [todos, setTodos] = useState([])
  return (
    <div>
        <h1>What is the plan</h1>
        <Todoform/>
    </div>
  )
}

export default Todolist