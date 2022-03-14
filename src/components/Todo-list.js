import React, { useState } from 'react';

const TodoList = () => {
    let [tasks, setTasks] = useState('');
    let [taskList, setTaskList] = useState([]);

    const addTask=(e)=>{
        e.preventDefault();

        if (tasks.length == 0) {
            return null;
        }
        //created a dictionary so I can store the task and a condtitional for if it's been completed or not
    const completion = {
            text: tasks,
            complete: false
        }
        // toss in brand new array so it can update it not by the same array , but update by the old array plus one more item
        setTaskList([...taskList, completion]);
        console.log('New Task Added!')
    }
    const deleteTask = (i) => {
        const newList = taskList.filter((task, ii) => {
            return ii !== i;
        });
        setTaskList(newList)
        }
    const handleComplete = (i) => {
        const updateTasks = taskList.map((task, ii) => {
            console.log(task.complete);
            if (i == ii) {
                task.complete = !task.complete;
            }
        return task;
        });
        setTaskList(updateTasks);
    }

    return (
        <div>
            <form onSubmit={(e) => addTask(e) }>
            <h1>To Do List</h1>
            <input type="text" placeholder='Type Task Here' onChange={ (e) => setTasks(e.target.value)}></input>
            <div>
            <button type="submit">Add</button>
            </div>
            </form>
            <div>
                <ul>
                    { taskList.map( (tasks, i) => { 
                        const tasksClasses = [];
                        if (tasks.complete) {
                            tasksClasses.push("checked")
                        }
                    return <li key={i} className={tasksClasses.join(" ")}>{ tasks.text } <input onChange={(e) => {handleComplete(i);
                    }} checked = {tasks.complete} type="checkbox" ></input> <button onClick = { (e) => deleteTask(i)}>Delete </button></li>  } ) } 
                </ul>
            </div>
        </div>
    );
    }

    export default TodoList;

