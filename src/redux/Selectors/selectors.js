export const getFilterTasks=(state)=>{
    if (!state.todolist.filter) return state.todolist.tasks;
    return state.todolist.tasks.filter(t=>t.title.indexOf(state.todolist.filter)>-1)
}