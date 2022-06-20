import React from 'react';
import TaskForm from './TaskForm';
import {useState, useEffect} from 'react';

const retrieveData = localStorage.getItem('Tasks') ? JSON.parse(localStorage.getItem('Tasks')) : [];

const Task = () => {

    const [title, setTitle] = useState('');
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [myStatus, setMyStatus] = useState('');
    const [tasks, setTasks] = useState(retrieveData);

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleTask(e){
        setTask(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handleMood(e){
        setMyStatus(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        let id = Date.now();
        let myThoughts = {id,title,task,date,myStatus};

        setTasks([...tasks, myThoughts]);
    }

    const handleRemove = (e)=>{
        let numId = e.target.id;
        let newTask = [...tasks].filter(task => { return task.id != numId});
        setTasks(newTask);
      }

    useEffect(()=>{
        localStorage.setItem('Tasks', JSON.stringify(tasks));
    },[tasks])


  return (
    <div className='col-md-6'>
        <div className='container text-center mt-5 border-warning border shadow-lg p-4'>
            <h2>Create New Task</h2>
            <div className='container mt-5'>
                <TaskForm handleTitle={handleTitle} handleTask={handleTask} handleDate={handleDate} handleStatus={handleMood} handleSubmit={handleSubmit}/>
            </div>
            <hr />

            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Your Tasks</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, i)=>{
                                return <tr key={task.id}>
                                        <td>{i + 1}</td>
                                        <td>{task.title}</td>
                                        <td>{task.task}</td>
                                        <td>{task.date}</td>
                                        <td>{task.myStatus}</td>
                                        <td><button id={task.id} onClick={handleRemove} className='btn btn-danger'><i className="bi bi-trash3"></i></button></td>
                                        </tr>
                            })
                        }
                       
                    </tbody>
            </table>
        </div>
    </div>
  )
}

export default Task