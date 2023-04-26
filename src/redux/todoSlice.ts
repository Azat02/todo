import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoType } from "../types";

interface TodoSliceType {
    data: TodoType[],
    isLoading: boolean,
}

const datas = JSON.parse(localStorage.getItem('todos')) || []
const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        data: datas,
        isLoading: true,
    } as TodoSliceType,
    reducers:{
        addTodo: (state, action: PayloadAction<string>) => {
            state.data.push({
                id: Date.now(),
                title: action.payload,
                status: false,
            })
        },
        deleteTodo:  (state, action: PayloadAction<string | number>) => {
            state.data = state.data.filter((item: TodoType) => item.id !== action.payload);
        },

        onEditTodo: (state, {payload}: PayloadAction<{id: string | number, inputValue: string}>) => {
            state.data = state.data.map((item: TodoType) => {
                if (item.id === payload.id) {
                  return { ...item, title: payload.inputValue };
                }
                return item;
              }) 
        },  

        onStatusChange: (state, {payload}: PayloadAction<string | number>) => {
            state.data = state.data.map((item: TodoType) => {
                if (item.id === payload) {
                  return {...item, status: !item.status}
                }
                return item
              })
        }
    },
})
export const {addTodo, deleteTodo, onStatusChange, onEditTodo} = todoSlice.actions;
export const todoReducer = todoSlice.reducer