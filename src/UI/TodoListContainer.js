import React from 'react';
import ToDoList from "./TodoList";
import {connect} from "react-redux";
import {
    addTask, changeTask, createTask, getTask, setFilter
} from "../redux/TodoListReducer";
import {getFilterTasks} from "../redux/Selectors/selectors";


class TodoListContainer extends React.Component {
     componentDidMount() {
this.props.getTask()
     }
    render() {
        return <ToDoList {...this.props}/>
    }
};
const mapStateToProps = (state) => {
    return {
        // tasks: state.todolist.tasks,
        tasks: getFilterTasks(state),
        status: state.todolist.status,
        newTextTitle:state.todolist.newTextTitle
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTaskAC(task)),
        changeTask: (newText) => dispatch(changeTaskAC(newText)),
        getTask:()=>dispatch(getTaskThunk()),
        taskCreated:(title)=>dispatch(createTask(title))
    }
}*/
 TodoListContainer = connect(mapStateToProps, {addTask,changeTask,getTask,createTask,setFilter})(TodoListContainer);

export default TodoListContainer;