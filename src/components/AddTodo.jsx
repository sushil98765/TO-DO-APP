import { useContext } from "react";
import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-items";

function AddTodo({ onNewItem }) {
  
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const dueDateElement = useRef();


  
  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    addNewItem(todoName, dueDate);
    


  };

  

  return  <div className Name="container ">
    <form className Name="row kg-row"  onSubmit={handleAddButtonClicked}
    >
        <div className Name="col-6">
        <input type="text"
          ref={todoNameElement}
          placeholder="Enter ToDo Here"
         
        >
          </input></div>
        <div className Name="col-4">
        <input type='date'
          ref={dueDateElement}
          
        />
    </div>
        <div className Name="col-2">
        <button  className Name="btn btn-success kg-button"
          
        >
            Add
          </button>
    </div>
    </form>
    </div>
}
export default AddTodo;