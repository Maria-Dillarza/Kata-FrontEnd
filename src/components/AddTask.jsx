import { useState } from "react"

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [end, setEnd] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text){
            alert('Please add text')
            return
        }

        onAdd({text, date, end})

        setText('')
        setDate('')
        setEnd(false)
    }

    return (
    <form className="add-form" onSubmit={onSubmit}>
        <div className = "form-control">
            <label>Tasks</label>
            <input type = "text" placeholder="Click Task" value = {text} onChange = {(e) => setText (e.target.value)}></input>
        </div>
        <div className = "form-control">
            <label>Date</label>
            <input type = "text" placeholder="Enter date" value = {date} onChange = {(e) => setDate (e.target.value)}></input>
        </div>
        <div className = "form-control form-control-check">
            <label>End</label>
            <input type = "checkbox" checked = {end} value = {end} onChange = {(e) => setEnd (e.currentTarget.checked)}/>
        </div>
        <input className = "btn btn-block" type="submit" value= "Add Task"/>
    </form>
    )
}

export default AddTask