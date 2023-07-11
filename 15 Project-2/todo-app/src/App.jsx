import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Tasks from './components/Tasks/Tasks'

const LOCAL_STORAGE_KEY = 'todo:tasks';

const App = () => {

  const [tasks, setTasks] = useState([]);

  // Save tasks in localstorage
  const setTasksAndSave = (newTasks) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  // load task from localstorage
  const loadSavedTasks = () => {
    const savedTask = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(savedTask) {
      setTasks(JSON.parse(savedTask));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  const addTasks = (taskTitle) => {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      }
    ])
  }
  
  const toggleTaskCompletedById = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        }
      }
      return task;
    })
    setTasksAndSave(newTasks);
  }

  const deleteTasks = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header addTasks={addTasks} />
      <Tasks tasks={tasks} onCompletedTaskHandler={toggleTaskCompletedById} onDelete={deleteTasks} />
    </>
  )
}

export default App