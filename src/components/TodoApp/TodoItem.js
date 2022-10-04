import classNames from "classnames/bind";
import styles from "./Styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { todoListSelector } from "../../store/selector";
import { completeItem, deleteItem } from "../../store/actions";

const cx = classNames.bind(styles);


function TodoItem() {
  const dispatch = useDispatch();
  const selectors = useSelector(todoListSelector);

  const handleChange = (index, e) => {
    e.target.checked
      ? alert(` completed item ${index + 1} `)
      : alert(` xóa completed ${index + 1} `);
    dispatch(completeItem({ index, value: e.target.checked || false }));
  };
  const handleYes = (data)=>{
     dispatch(deleteItem(data));
  }
  return selectors.map((selector, index) => (
    <li key={index} className={selector.complete ? cx("completed") : ""}>
      <div className={cx("view")}>
        <input
          className={cx("toggle")}
          type="checkbox"
          checked={selector.complete}
          onChange={(e) => handleChange(index, e)}
        />
        <label>{selector.title}</label>
          <button
            className={cx("destroy")}
            onClick={handleYes}
          ></button>
      </div>
      <input className={cx("edit")} />
    </li>
  ));
}

export default TodoItem;
