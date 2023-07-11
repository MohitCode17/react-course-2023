import { useState } from 'react';
import styles from './Header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';


const Header = ({addTasks}) => {

  const [title, setTitle] = useState('');

  const handleSubmitTasks = (e) => {
    e.preventDefault();

    addTasks(title);
    setTitle("");
  }

  return (
    <div className={styles.header}>
        <img src='./images/todoLogo.svg' alt="logo" />

        <form className={styles.taskForm} onSubmit={handleSubmitTasks}>
            <input type="text" placeholder='Add a new task' value={title} onChange={(e) => setTitle(e.target.value)} />
            <button>Create<AiOutlinePlusCircle/></button>
        </form>
    </div>
  )
}

export default Header