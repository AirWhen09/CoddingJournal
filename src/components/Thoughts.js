import React from 'react';
import ThoughtForm from './ThoughtForm';
import {useState, useEffect} from 'react';

const retrieveData = localStorage.getItem('Thoughts') ? JSON.parse(localStorage.getItem('Thoughts')) : [];


const Thoughts = () => {
  
    const [title, setTitle] = useState('');
    const [thought, setThought] = useState('');
    const [date, setDate] = useState('');
    const [mood, setMood] = useState('');
    const [thoughts, setThoughts] = useState(retrieveData);

    function handleTitle(e){
        setTitle(e.target.value);
    }

    function handleThought(e){
        setThought(e.target.value);
    }

    function handleDate(e){
        setDate(e.target.value);
    }

    function handleMood(e){
        setMood(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        let id = Date.now();
        let myThoughts = {id,title,thought,date,mood};

        setThoughts([...thoughts, myThoughts]);
    }

    const handleRemove = (e)=>{
        let numId = e.target.id;
        let newThoughts = [...thoughts].filter(thought => { return thought.id != numId});
        setThoughts(newThoughts);
      }

    useEffect(()=>{
        localStorage.setItem('Thoughts', JSON.stringify(thoughts));
    },[thoughts])


  return (
    <div className='col-md-6'>
        <div className='container text-center mt-5 border-success border shadow-lg p-4'>
            <h2>Create New Thoughts</h2>
            <div className='container mt-5'>
                <ThoughtForm handleTitle={handleTitle} handleThought={handleThought} handleDate={handleDate} handleMood={handleMood} handleSubmit={handleSubmit}/>
            </div>
            <hr />
            <table className="table table-striped table-inverse table-responsive">
                <thead className="thead-inverse">
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Your Thoughts</th>
                        <th>Date</th>
                        <th>Mood</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        thoughts.map((thought, i)=>{
                              return <tr key={thought.id}>
                                      <td>{i + 1}</td>
                                      <td>{thought.title}</td>
                                      <td>{thought.thought}</td>
                                      <td>{thought.date}</td>
                                      <td>{thought.mood}</td>
                                      <td><button id={thought.id} onClick={handleRemove} className='btn btn-danger'><i className="bi bi-trash3"></i></button></td>
                                      </tr>
                          })
                    }
                    </tbody>
            </table>
            
        </div>
    </div>
  )
}

export default Thoughts