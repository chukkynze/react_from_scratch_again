import {useState} from "react";

function ToDoList(){

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);
  }

  function addTask(){

    if(newTask.trim() !== ""){
      setTasks(prevTasks => [...prevTasks, newTask]);
      setNewTask('');
    }
  }

  function deleteTask(taskIndex){
    const updatedTasks = tasks.filter((_, arrayIndex) => (arrayIndex !== taskIndex));
    setTasks(updatedTasks);
  }

  function moveTaskUp(taskIndex){
    if (taskIndex > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[taskIndex], updatedTasks[taskIndex - 1]] = [updatedTasks[taskIndex - 1], updatedTasks[taskIndex]]
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(taskIndex){
    if (taskIndex < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[taskIndex], updatedTasks[taskIndex + 1]] = [updatedTasks[taskIndex + 1], updatedTasks[taskIndex]]
      setTasks(updatedTasks);
    }
  }

  return(
    <div className="todo-list">

      <h1>Todo List</h1>

      <div>
        <input type="text"
               placeholder="Enter a task..."
               value={newTask}
               onChange={handleInputChange}
        />
        <button className="add-button"
                onClick={addTask}
        >
          Add
        </button>
      </div>

      <ol>
        {tasks.map((taskElem, taskIndex) => (
          <li key={taskIndex}>
            <span className="span-text">{taskElem}</span>
            <button className="delete-button"
                    onClick={() => deleteTask(taskIndex)}
            >
              Delete
            </button>
            <button className="move-button"
                    onClick={() => moveTaskUp(taskIndex)}
            >
              Up
            </button>
            <button className="move-button"
                    onClick={() => moveTaskDown(taskIndex)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>

    </div>
  );
}

export default ToDoList
