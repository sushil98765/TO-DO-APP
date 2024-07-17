import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items";

function TodoItem({ todoName, todoDate, onDeleteClick }) {
  
  const { deleteItem } = useContext(TodoItemsContext);

  // let todoItem = "Buy Milk";
  // let todoDate = "4/10/2023";
  return <div className Name="container ">
      <div className Name="row kg-row">
        <div className Name="col-6">
          {todoName} </div>
        <div className Name="col-4">
        {todoDate }</div>
        <div className Name="col-2">
        <button type="button" className Name="btn btn-danger kg-button"
          onClick={()=> deleteItem(todoName)}
        >
            Delete
          </button>
    </div>
    </div>
    </div>
}
export default TodoItem;
