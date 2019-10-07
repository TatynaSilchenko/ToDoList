import * as axios from "axios";

const ADD_TASK='TODOLIST/TODOLIST/ADD_TASK';
const SET_TASKS='TODOLIST/TODOLIST/SET_TASKS';
const SET_STATUS='TODOLIST/TODOLIST/SET_STATUS';
const CHANGE_TASKS='TODOLIST/TODOLIST/CHANGE_TASKS'
const SET_FILTER='TODOLIST/TODOLIST/SET_FILTER'
let initialState={
    tasks:[{title: 'hi'}],
    status:'no-init',
    newTextTitle:'',
    filter:''
};
export const statuses = {
    NOT_INITIALIZED:'NOT_INITIALIZED',
    ERROR:'ERROR',
    IN_PROGRESS:'IN_PROGRESS',
    CAPTCHAREQUIRED:'CAPTCHAREQUIRED',
    SUCCESS:'SUCCESS'
}
    const TodoListReducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_TASK:
            return{
                ...state,
            tasks:[...state.tasks,action.task]
            };
        case SET_TASKS:
            return{
                ...state,
                tasks:action.tasks           };
        case SET_STATUS:
            return{
                ...state,
                status:action.status           };
        case CHANGE_TASKS:
            return {
                ...state,
                newTextTitle:action.newText
            };
        case SET_FILTER:
            debugger
            return {
                ...state,
                filter:action.filterValue
            };
        default:
            return state;
    }
};

export const addTask=(task)=>({type:ADD_TASK,task});
export const setTasks=(tasks)=>({type:SET_TASKS,tasks});
export const setStatus=(status)=>({type:SET_STATUS,status});
export const changeTask=(newText)=>({type:CHANGE_TASKS,newText});
export const setFilter=(filterValue)=>({type:SET_FILTER,filterValue});
export let getTask=()=>(dispatch)=>{
    dispatch(setStatus(statuses.IN_PROGRESS));
    axios
        .get('https://repetitora.net/api/JS/Tasks?widgetId=8765')
        .then(resolve=>{
           dispatch(setTasks(resolve.data));
            dispatch(setStatus(statuses.SUCCESS))
        });
};
export let createTask=(title)=>(dispatch)=>{
    dispatch(setStatus(statuses.IN_PROGRESS))
    axios
        .post('https://repetitora.net/api/JS/Tasks',{widgetId: 8765, title})
        .then(resolve=>{
            dispatch(addTask(resolve.data.task))
            dispatch(setStatus(statuses.SUCCESS))
            dispatch(changeTask(''))
        });
}
export default TodoListReducer;