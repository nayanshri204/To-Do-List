import './App.css';
import React, { useState } from 'react';

function App() {
  let[todolist,setTodoList]=useState([])

  function saveToDoList(event){ 
    let toname=event.target.toname.value;
    if(!todolist.includes(toname)){
      let finalToDo=[...todolist,toname]
      setTodoList(finalToDo);  

    }
    else{
      alert("ToDo Name Already Exists....!!");
    }

    event.preventDefault();
  }
  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index}
      todoList={todolist}
      setToDoList={setTodoList}
      />

    )
  })
  return (
    <div className="App">
      <h1>ToDos</h1>
      <form onSubmit={saveToDoList}>
        <input type="text" name="toname" placeholder='Enter your todo'/>
         
      </form><br></br> 
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
   
  );
}

export default App;

function ToDoListItems({value, indexNumber, todoList, setToDoList}){

  let[status,setStatus]=useState(false)
  function deleteRow(){
    let finalData=todoList.filter((v,i)=>i!==indexNumber)
    setToDoList(finalData)
  }
  function checkStatus(){
    setStatus(!status)

  }
  return(
    <li className={(status)?'completetodo':''} onClick={checkStatus}> {indexNumber+1}. {value} <span onClick={deleteRow}>&times;</span></li>
  )
}
