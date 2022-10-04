const TODOS_STORAGE_KEY = 'TODOS';

// eslint-disable-next-line
export default {
    get(){
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    },
    set(keyLocalStorage, value){
        // console.log(todos,"todos");
        // localStorage.removeItem(TODOS_STORAGE_KEY)
        console.log(value, "value", keyLocalStorage)
        localStorage.setItem(keyLocalStorage, JSON.stringify(value))
    }
}