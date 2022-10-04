import classNames from "classnames/bind";
import styles from './Styles.module.scss'


import TodoItem from "./TodoItem";
const cx =classNames.bind(styles)



function TodoList() {
    return ( 
    <section className={cx("main")}>
        <input 
            id="toggle-all"
            className={cx("toggle-all")} 
            type="checkbox"
            
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className={cx("todo-list")}>
            <li><TodoItem/></li>
        </ul>
    </section> 
);
}

export default TodoList;