import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name: 'Form',
    initialState: {
        todoTitle: '',
        todoDescription: '',
        todoBackground: '',
        todoWorkDay: '',
    },
    reducers: {
        changeTodoTitle: (state, action) => {
            state.todoTitle = action.payload;
        },
        changeTodoDescription: (state, action) => {
            state.todoDescription = action.payload;
        },
        changeTodoBackground: (state, action) => {
            state.todoBackground = action.payload;
        },
        changeTodoWorkDay: (state, action) => {
            state.todoWorkDay = action.payload;
        },
        changeResetForm: (state) => {
            state.todoTitle = '';
            state.todoDescription = '';
            state.todoBackground = '';
            state.todoWorkDay = '';
          },
        
    },
    
});

export const { changeTodoTitle, changeTodoDescription, changeTodoBackground, changeResetForm , changeTodoWorkDay} = FormSlice.actions;
export const FormSlices = FormSlice.reducer;