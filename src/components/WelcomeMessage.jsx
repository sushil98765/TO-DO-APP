import styles from "./Welcome.module.css";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items";


const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
 
  return ( todoItems.length === 0 && <p className Name={styles.welcome}> Enjoy your Day</p>);
};
export default WelcomeMessage;