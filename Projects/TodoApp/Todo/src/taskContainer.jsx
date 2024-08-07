import styles from "./css/container.module.css";
import "./css/style.css";
import { useContext } from "react";
import TodoItemsContext from "./store/todo-item-store";

export default function Taskcontainer({handleTaskDelete , handleMarkDone}) {



  const {todoTask , deleteTask , markDone} = useContext(TodoItemsContext)

  if (!Array.isArray(todoTask)) {
    return <div>No tasks available</div>;
  }

  return (
    <>
      {todoTask.map((task) => {
        return (
          <div className="row" key={task.id}>
            <div className="col-5" style={task.isDone ?{textDecorationLine : "line-through"} : {} }>{task.taskName}</div>
            <div className="col-3">{task.taskDate}</div>
            <div className="col-2">
              <div className="btn btn-danger my-btn"
                onClick={() => deleteTask( task.id)}>
                Delete
              </div>
            </div>
            <div className="col-2 btn btn-secondary" onClick={()=> markDone(task.id)}>{task.isDone ? "Mark Undone" : "Mark Done"}</div>
          </div>
        );
      })}
    </>
  );
}
