import Newtodo from "./newtodo.jsx";
import styles from "./css/container.module.css";
import Taskcontainer from "./taskContainer.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import CompletionMessage from "./message.jsx"
import TodoItemsContext from "./store/todo-item-store.jsx";

export default function Container() {
  let [todoTask, setTodoTask] = useState([]);

  let [taskvalues, setValues] = useState({
    taskName: "",
    taskDate: "",
  });

  const inputChange = (event) => {
    setValues((taskvalues) => {
      return { ...taskvalues, [event.target.name]: event.target.value };
    });
  };

  function addNewTask(event) {
    event.preventDefault();
    let newTodoTask = [
      ...todoTask,
      {
        taskName: taskvalues.taskName,
        taskDate: taskvalues.taskDate,
        id: uuidv4(),
        isDone: false,
      },
    ];
    setTodoTask(newTodoTask);
    setValues({
      taskName: "",
      taskDate: "",
    });
  }

  function deleteTask(id) {
    setTodoTask((todoTask) => {
      return todoTask.filter((val) => {
        val.id !== id;
      });
    });
  }

  function markDone(id) {
    setTodoTask((todoTask) => {
      return todoTask.map((task) => {
        if (task.id === id && task.isDone === false) {
          return { ...task, isDone: true };
        }
        else if (task.id === id && task.isDone === true) {
          return { ...task, isDone: false };
        }
        else {
          return task;
        }
      });
    });
  }




  return (
    <TodoItemsContext.Provider
      value={
        {
          todoTask, deleteTask, addNewTask, markDone,
          taskvalues,
          inputChange
        }
      }
    >
      <div className={styles.container}>
        <Newtodo />
        <CompletionMessage/>
        <Taskcontainer />
      </div>
    </TodoItemsContext.Provider>
  );
}
