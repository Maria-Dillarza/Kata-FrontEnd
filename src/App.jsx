import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
import AddTask from "./components/AddTask";

function App() {

  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: 'Go to the doctor',
        date: '5th July, 2022',
        end: true
    },
    {
        id: 2,
        text: 'Go to the cinema',
        date: '10th July, 2022',
        end: false 
    },
    {
        id: 3,
        text: 'Go to the supermarket',
        date: '22th July, 2022',
        end: false 
    },
])

//AddTask
const addTask = (tarea) =>{
  console.log(tarea)
}

//Delete task

const deleteTask = (id) =>{
  //console.log('Delete task', id)
  setTasks (tasks.filter(task => task.id !== id))
}

//Toogle finish
const toggleFinish = (id) =>{
//console.log(id)
  setTasks(tasks.map((task) => task.id === id ? {... task, end: !task.end} : task))
}

return (
<div className='container'>
    <Header titulo = 'Task'/>
    {tasks.length > 0 ?  (<Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleFinish}/>) : 'You are the best (no tasks to do)'}
    <AddTask onAdd = {addTask}/>
</div>
  )
}

export default App
