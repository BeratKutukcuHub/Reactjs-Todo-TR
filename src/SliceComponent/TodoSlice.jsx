import { createSlice , nanoid } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name : 'Todo',
    initialState : {
        TodoList : [],
        TodoDelete : [],
        TodoProperty : {title:'Todos' , description : 'Silinenleri Geri Getir',background : 'rgb(81, 20, 20)'},
        TodoController : false,
        TodoFilter : '',
    },
    reducers :{
        addTodoList : (state , action) => {
                state.TodoList.push({
                    todoTitle : action.payload.todoTitle,
                    todoDescription : action.payload.todoDescription,
                    todoBackground : action.payload.todoBackground,
                    todoWorkDay : action.payload.todoWorkDay,
                    todoID : nanoid()
                });
        },
        removeTodoList : (state , id) => {
            const index = state.TodoList.findIndex(item => item.todoID === id.payload);
            if (index !== -1) {
              const deleted = state.TodoList.splice(index, 1);
              deleted.map((item)=>{
                state.TodoDelete.push({
                    todoTitle : item.todoTitle,
                    todoDescription : item.todoDescription,
                    todoBackground : item.todoBackground,
                    todoWorkDay : item.todoWorkDay ,
                    todoID : item.todoID
                });
              });
            };
        },
        updateTodoList : (state , news) => {
            const index = state.TodoList.findIndex(item => item.todoID === news.payload.todoID);
            if (index !== -1) {
              state.TodoList.splice(index, 1, news.payload);
            };
        },
        todoDeleteOrPush : (state , action) => {
            state.TodoController = action.payload;
        },
        todoNewProperty : (state,action) => {
            if(state.TodoController === true){
                state.TodoProperty = action.payload[0];
            }else  state.TodoProperty = action.payload[1];
        },
        getDeleteTodoForPush : (state , action) => {
            state.TodoList.push(action.payload);
            state.TodoDelete = state.TodoDelete.filter((item)=>item.todoID!==action.payload.todoID);
        },
        changeTodoFilter : (state , filter) => {
            state.TodoFilter = filter.payload;
        },
        changeRealDelete : (state , deleted) => {
            state.TodoDelete = state.TodoDelete.filter((item)=>item.todoID!==deleted.payload.todoID)
        }
    },
}) 
export const {addTodoList , removeTodoList , updateTodoList , todoDeleteOrPush , getDeleteTodoForPush , todoNewProperty , changeTodoFilter, changeRealDelete} = TodoSlice.actions
export const TodoSlices = TodoSlice.reducer