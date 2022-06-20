import React from 'react'

const TaskForm = (props) => {
  return (
    <form action="" className='input-group-lg d-grid' onSubmit={props.handleSubmit}>
        <input type="text" name='title' id='title' placeholder='Title' onChange={props.handleTitle} className='form-control' required/>
        <input type="date" min={new Date().toISOString().split("T")[0]} name='date' id='date' onChange={props.handleDate} className='form-control' required/>
        <textarea name="task" id="task" className='form-control' onChange={props.handleTask} placeholder='Your Task' required></textarea>
        <select name="status" id="status" className='form-control' onChange={props.handleStatus} required>
            <option value="">Status</option>
            <option value="To Do">To Do</option>
            <option value="On Going">On Going</option>
            <option value="Done">Done</option>
        </select>
        <button className='btn btn-warning mt-3' type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm