
  import React, { useState } from 'react'
  
  
  function Todo() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])
    const [editIndex, setEditIndex] = useState(null)  
  
    const handleEdit = (index) => {
     
      setTodo(todos[index].todo)
      setEditIndex(index) 
    }
  
    const handleDelete = (index) => {
    
      setTodos(todos.filter((_, i) => i !== index))
    }
  
    const handleAdd = () => {
      if (todo.trim() === "") return; 
  
      if (editIndex !== null) {
      
        const updatedTodos = [...todos]
        updatedTodos[editIndex].todo = todo
        setTodos(updatedTodos)
        setEditIndex(null) 
      } else {
       
        setTodos([...todos, { todo, isCompleted: false }])
      }
  
      setTodo("") 
    }
  
    const handleChange = (e) => {
      setTodo(e.target.value)
    }
  
    return (
      <>
        
        <div className="container mx-auto">
          <div className="addTodo">
            <h2 className="text-sm font-bold">{editIndex !== null ? "Edit Todo" : "Add a Todo"}</h2>
            <input onChange={handleChange} value={todo} type="text"  className='form-control'/>
            <button
              onClick={handleAdd}
              className="btn btn-success m-2"
            >
              {editIndex !== null ? "Update" : "Add"} 
            </button>
          </div>
  
          <h2 className="text-lg font-bold">Your Todos</h2>
          <div className="todos">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {todos.map((item, index) => {
              return (
                <div key={index} className="col">
                      <div className="card  mb-3">
                        <div className="card-body">
                          <h2 className={item.isCompleted ? "" : "card-title"}>
                            {item.todo}
                          </h2>
                          <button onClick={() => handleEdit(index)} className="btn btn-warning btn-sm m-2">
                            Edit
                          </button>
                          <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm m-2">
                            Delete
                          </button>
                        </div>
                    </div>
  
                </div>
              );
            })}
          </div>
            </div>
        </div>
            
  
      </>
    )
  }
  
  export default Todo
    