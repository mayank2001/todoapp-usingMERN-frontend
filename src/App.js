import { useEffect, useState } from "react";
import ToDO from "./components/todo"
import { addToDO, getAllToDo,updateToDo,deleteToDo } from "./utils/handle_api";

function App() {

  const[toDo, setToDo] = useState([])
  const[text,setText] = useState("") 
  const [toDoId, setToDoId] = useState("")
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    getAllToDo(setToDo)
  },[])

  const updateMode = (_id, text) => 
{  setIsUpdate(true)
  setText(text)
  setToDoId(_id)
}
  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div className="top">
          <input 
          type="text" 
          placeholder = "Add your tasks"
          value={text}
          onChange={(e) => setText(e.target.value)}></input>


          <div className="add" 
          onClick={isUpdate ? 
          () => updateToDo(toDoId, text,setToDo,setText,setIsUpdate) 
          : () => addToDO(text, setText, setToDo)}>
            {isUpdate ? "Update" : "Add"}
            </div>

            
        </div>
        <div className="list">
          {toDo.map((item) => <ToDO 
          key={item._id} 
          text={item.text}
          updateMode={() => updateMode(item._id, item.text)}
          deleteTodo={()=> deleteToDo(item._id, setToDo)} />)}


        </div>
      </div>
    </div>
  );
}

export default App;
