import React from 'react'

const TaskItem = (task) => {
    return <li>{task}</li>
}
export default function TaskList(props) {
    const { tasksList } = props;
  return (
    <ul className='task__list'>
        {tasksList.map((task, index) => {
            return TaskItem(task);
        })}

    </ul>
  )
}
