import React from 'react';
import style from './todolist.module.css'
import {createTask, setFilter, statuses} from "../redux/TodoListReducer";

const ToDoList = (props) => {
    let {tasks = [], status, changeTask,newTextTitle} = props;
    let onTitleChange = (e) => {
        changeTask(e.currentTarget.value)
    };
    let onKeyUp = (e) => {
        (e.keyCode === 13) && props.createTask(e.currentTarget.value)
    };
    return <div className={style.list}>
        <div>
            <input placeholder={'Enter task'}
                   onKeyUp={onKeyUp}
                   disabled={status === statuses.IN_PROGRESS}
                   value={newTextTitle}
                   onChange={onTitleChange}className={style.addNewTask}/>
        </div>

        <div><input placeholder={'search'}
                    type="text"
                    onChange={(e)=>{props.setFilter(e.currentTarget.value)}}/>
        </div>
        <div >
            <ul> {tasks.map(t => <li className={style.task}>{t.title}</li>)}
                {!tasks.length && <span>No  tasks</span>}

            </ul>
        </div>
        {/*        <div>
            <button>Enter</button>
        </div>*/}
        <div className={style.status}> STATUS: {props.status}</div>
    </div>
}
export default ToDoList;