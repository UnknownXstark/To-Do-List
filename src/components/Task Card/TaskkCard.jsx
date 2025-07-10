import React from 'react'
import './TaskCard.css'

const TaskkCard = () => {
  return (
    <div className='taskcard'>
        <div className='taskcard-head'>
            <h1>Todays Task.</h1>
        </div>
        <div className='taskcard-tasks'></div>
        <div className='taskcard-footer'>
            <button>Finish</button>
            <button>Add task</button>
        </div>
    </div>
  )
}

export default TaskkCard