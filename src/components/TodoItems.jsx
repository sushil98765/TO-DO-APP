import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items";

import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';

const TodoItems = ({  onDeleteClick }) => {
  const {todoItems}  = useContext(TodoItemsContext);

  return (
    <div className Name={styles.itemContainer}>
      {todoItems.map((item) => (<TodoItem key={item.name} todoDate={item.dueDate}
        todoName={item.name}
        
      ></TodoItem>
      
      ))}
      
    </div>

  );
}
export default TodoItems;