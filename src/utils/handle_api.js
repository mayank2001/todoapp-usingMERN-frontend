import axios from 'axios'

const baseURL = "https://todoapp-usingmern-backend.onrender.com"

const getAllToDo = (setToDo) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log('data -->', data);
        setToDo(data)
    })
}

const addToDO = (text, setText, setToDo) => {

    axios
    .post(`${baseURL}/save`,{text})
    .then((data) => 
    {console.log(data);
    setText("")
    getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text,setToDo,setText,setIsUpdate) => {

    axios
    .post(`${baseURL}/update`,{_id: toDoId,text})
    .then((data) => 
    {
    setText("")
    setIsUpdate(false)
    getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}

const deleteToDo = (_id, setToDo) => {

    axios
    .post(`${baseURL}/delete`,{_id})
    .then((data) => 
    {
    console.log(data);
    getAllToDo(setToDo)
    })
    .catch((err) => console.log(err))
}




export {getAllToDo, addToDO,updateToDo,deleteToDo}