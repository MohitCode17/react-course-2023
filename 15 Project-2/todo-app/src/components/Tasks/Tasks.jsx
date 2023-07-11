import Task from '../Task/Task';
import styles from './Tasks.module.css';

const Tasks = ({tasks, onCompletedTaskHandler, onDelete}) => {

    const createdTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
        <header className={styles.header}>
            <div>
                <p>Created tasks</p>
                <span>{createdTasks}</span>
            </div>
            <div>
                <p className={styles.textPurple}>Completed</p>
                <span>{completedTasks} of {createdTasks}</span>
            </div>
        </header>

        <div className={styles.tasksList}>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onCompletedTaskHandler={onCompletedTaskHandler} onDelete={onDelete} />
            ))}
        </div>
    </section>
  )
}

export default Tasks