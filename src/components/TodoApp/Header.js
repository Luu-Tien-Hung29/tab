import { useState,useRef } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames/bind";
import styles from './Styles.module.scss'
import { addItem } from '../../store/actions'

const cx =classNames.bind(styles)


function Header() {
  const inputRef = useRef()
  const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');
  const handleAdd = ()=>{
    alert('  them item todo')
    dispatch(addItem({
      title:valueInput,
      complete:false,
      id: new Date() *1
    }));
    setValueInput('')
    inputRef.current.focus()
  }
    return ( 
    <header className={cx("header")}>
      <h1>todos</h1>
      <input className={cx("new-todo")} 
      ref = {inputRef}
      placeholder="What needs to be done?" 
      value={valueInput.trim() && valueInput}
      onChange= {(e)=>setValueInput(e.target.value)}
       />
       <button className={cx('btn-header')} onClick={handleAdd} disabled= {!valueInput.trim()} style={!valueInput.trim() ? {backgroundColor: 'red',color:'white' }:{backgroundColor: 'green',color:'white' }}>ADD</button>
    </header> 
    );
}

export default Header;