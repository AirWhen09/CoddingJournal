import React from 'react'

const ThoughtForm = (props) => {
  return (
    <form action="" className='input-group-lg d-grid' onSubmit={props.handleSubmit}>
      <input type="text" name='title' id='title' placeholder='Title' onChange={props.handleTitle} className='form-control' required/>
      <input type="datetime-local" name='date' id='date' onChange={props.handleDate} className='form-control' required/>
      <textarea name="thoughts" id="thoughts" className='form-control' onChange={props.handleThought} placeholder='Your Thoughts' required></textarea>
      <select name="emotion" id="emotion" className='form-control dropdown' onChange={props.handleMood} required>
          <option value="">Select Mood</option>
          <option value="Happy">Happy</option>
          <option value="Sad">Sad</option>
      </select>
      <button className='btn btn-success mt-3' type='submit'>Add Thought</button>
  </form>
  )
}

export default ThoughtForm