import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";

import TodoItemsContextProvider from "./store/todo-items";




function App() {
  
  return (

    <TodoItemsContextProvider>
      <center className Name='todo-container'>
        <AppName></AppName>
        <AddTodo />
        <WelcomeMessage ></WelcomeMessage>
        <TodoItems ></TodoItems>
    
      </center>
    </TodoItemsContextProvider>
  
  )
};
export default App;
  