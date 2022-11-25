import React from 'react'

const fetchTodos = async()=>{
    const res = await fetch("");
    const todos = await res.json();
}
async function TodosList(){
    const todos = await fetchTodos()
  return (
    <div>
      
    </div>
  )
}

export default TodosList
