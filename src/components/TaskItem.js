import React from 'react'

const TaskItem = (props) => {
    const data = props.retrieveData.map((task, i)=>{
        return <tr key={task.id}>
                <td>{i + 1}</td>
                <td>{task.title}</td>
                <td>{task.task}</td>
                <td>{task.date}</td>
                <td>{task.myStatus}</td>
                <td><button id={task.id} onClick={props.handleRemove} className='btn btn-danger'><i className="bi bi-trash3"></i></button></td>
                </tr>
    });
  return (
    <>
        {data}
    </>
  )
}

export default TaskItem