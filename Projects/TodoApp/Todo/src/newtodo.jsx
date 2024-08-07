import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./css/container.module.css";
import "./css/style.css";
import { useContext } from "react";
import TodoItemsContext from "./store/todo-item-store";

export default function Newtodo() {

  let { taskvalues ,inputChange , addNewTask} = useContext(TodoItemsContext)

  return (
    <>
      <form>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              placeholder="Enter new todo"
              className={styles.input}
              value={taskvalues.taskName}
              name="taskName"
              onChange={inputChange}
            ></input>{" "}
          </div>
          <div className="col-3">
            <input
              type="date"
              className={styles.input}
              value={taskvalues.taskDate}
              name="taskDate"
              onChange={inputChange}
            ></input>{" "}
          </div>
          <div className="col-2">
            <button
              className="btn btn-success my-btn"
              onClick={addNewTask}
            >
              Add{" "}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
