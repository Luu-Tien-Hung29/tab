import classNames from "classnames/bind";
import styles from "./Styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { todoListSelector, todoListCheck } from "../../store/selector";
import { checkBoxItem, clearCompletedItem } from "../../store/actions";

const cx = classNames.bind(styles);

function Footer() {
  const footerSelector = useSelector(todoListSelector);
  const searchSelector = useSelector(todoListCheck);
  console.log(searchSelector);
  const dispatch = useDispatch();
  const handleClear = () => {
    const todoNewTrue = footerSelector.map((todo) => {
      return {
        ...todo,
        complete: false,
      };
    });

    dispatch(clearCompletedItem(todoNewTrue));
  };
  const todoNewFalse = footerSelector.filter((todo) => todo.complete === true);
  return (
    <footer className={cx("footer")}>
      <span className={cx("todo-count")}>
        <strong>{footerSelector.length}</strong> item left
      </span>
      <ul className={cx("filters")}>
        <li>
          <a
            className={cx("selected")}
            onClick={() => dispatch(checkBoxItem("all"))}
            href="/#"
          >
            all
          </a>
        </li>
        <li>
          <a
            className={cx("selected")}
            onClick={() => dispatch(checkBoxItem("active"))}
            href="/#"
          >
            active
          </a>
        </li>
        <li>
          <a
            className={cx("selected")}
            onClick={() => dispatch(checkBoxItem("completed"))}
            href="/#"
          >
            completed
          </a>
        </li>
      </ul>

      {todoNewFalse.length > 0 && (
        <button className={cx("clear-completed")} onClick={handleClear}>
          Clear completed
        </button>
      )}
    </footer>
  );
}

export default Footer;
