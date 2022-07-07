import {FaPlaystation} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return (
    <div className = {`task ${task.end ? 'end' : ''}`} onDoubleClick = {() => onToggle(task.id)}>
        <h3>{task.text}<FaPlaystation style = {{color: 'red', cursor: 'pointer'}} onClick = {() => onDelete (task.id)}/></h3>
        <p>{task.date}</p>
    </div>
    )
}

export default Task