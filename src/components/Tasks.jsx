const tasks = [
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
        end: false 
    },
]

const Tasks = () => {
    return (
    <>
        {tasks.map((task) =>(<h3 key = {task.id}>{task.text}</h3>))}
    </>
    )
}

export default Tasks