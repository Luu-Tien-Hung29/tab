import classNames from "classnames/bind";
import styles from './Styles.module.scss'

import Header from "./Header";
import TodoList from "./TodoList";
import Footer from "./Footer";

const cx =classNames.bind(styles)



function TodoApp() {
    return (
    <section className={cx("todoapp")}>
        <Header/>
        <TodoList/>
        <Footer/>
    </section>);
}

export default TodoApp;