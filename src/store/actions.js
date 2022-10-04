import { addtodo,completetodo,deletetodo,checkboxtodo,clearCompletedTodo } from "./contant"

export const addItem =(data) => {
    return {
        type:addtodo,
        payload: data
    }
}
export const completeItem = (data) =>{
    return {
        type:completetodo,
        payload:data,
    }
}
export const deleteItem = (data) => {
    return {
        type:deletetodo,
        payload: data
    }
}
export const checkBoxItem = (data) => {
    return {
        type:checkboxtodo,
        payload: data
    }
}
export const clearCompletedItem = (data) => {
    return {
        type:clearCompletedTodo,
        payload: data
    }
}
