import React from 'react'

const ThoughtList = (props) => {
  
    const data = props.retrieveData.map((thought, i)=>{
      let myId = parseInt(thought.id);
        return <tr key={thought.id}>
                <td>{thought.id}</td>
                <td>{thought.title}</td>
                <td>{thought.thought}</td>
                <td>{thought.date}</td>
                <td>{thought.mood}</td>
                <td><button value={myId} onClick={props.handleRemove} className='btn btn-danger'><i className="bi bi-trash3"></i></button></td>
                </tr>
    });
  return (
    <>
        {data}
    </>
  )
}

export default ThoughtList