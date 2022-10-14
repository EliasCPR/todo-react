import axios from 'axios';
import { useEffect, useState } from 'react'
import Form from './components/Form';
import Title from './components/Title';
import Card from './components/Card'

function App() {
  const [data, setData] = useState({
    title: "",
    description: ""
  })

  const [task, setTask] = useState([])
  useEffect(() => {    
    if(data.title && data.description){
      axios.post("http://localhost:3000/todo-api/tasks", data).then((e) => e.status === 201 ? listTodo(): "")
    }
  }, [data])
  console.log("eeeeeeeee",task);
  
  function listTodo(){
    axios.get("http://localhost:3000/todo-api/tasks").then((e) => setTask(e.data.data))
  }
  useEffect(() => {
    listTodo()
  }, [])
  

  function handleTodoData({title, description}){
    setData({title,description})
  }
  return (
    <div className='flex flex-col mt-10 items-center h-screen'>
      <Title text='TODO APP'/>
      <Form 
        getData={(e)=> {handleTodoData({title: e.title, description: e.description})
      }}
      />
      <div className='w-full h-full px-16'>
        <div className='bg-black w-full h-full flex flex-wrap'>
          {task.map((e) => (<Card key={e._id} description={e.description} title={e.title}/>))}
        </div>
      </div>
    </div>
  )
}

export default App
