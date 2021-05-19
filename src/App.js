import React,{useState,useEffect} from 'react'
import {db} from "./firebase"
import firebase from "firebase"
import './App.css';

function App() {
  let[item,setItem]=useState("");
  let [turner,setTurner]=useState(false)
  let[lists,setList]=useState([])
  useEffect(() => {
    const a= db.collection("todos").orderBy("timestamp","desc").onSnapshot(snapshot=>{
      console.log(snapshot.docs.map(doc=>doc.data()));
      setList(snapshot.docs.map(doc=>({id:doc.id,text:doc.data().text})))
    })
  }, [])
  // let lists=["excercise1","excercise2"]
  console.log("set",lists);
  const addIttem=(e)=>{
    // console.log(item);
    e.preventDefault()
    if (item.length<2){
      return  alert("please add taksl")
    }
    // console.log(item);
    db.collection("todos").add({
      text:item,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    // setList([...lists,item])

    setItem("")
    setTurner(false)

  }
  const deleteItem=(e)=>{
    console.log("here is coming",e);
    db.collection("todos").doc(e).delete()

  }
  const updateItem=(e)=>{
    setTurner(true)
    console.log("here is coming",e);
    // db.collection("todos").doc(e).delete()
    db.collection("todos").doc(e.b).delete()
    setItem(e.a)
 

  }
  return (
    <div className="App">
        <h1>Todo app</h1>
        <form onSubmit={addIttem}>
        <input value={item} type="text" name="" id="" onChange={(e)=>setItem(e.target.value)}/>
        <button disabled={!item} type="submit">{turner?"Update item":"Add item"}</button>
        </form>
        <ul> 
          {
         lists.map((list,i)=>(<li key={i}>{list.text}<button onClick={(e)=>updateItem({a:list.text,b:list.id})}>Update</button><button onClick={(e)=>deleteItem(list.id)}>Delete</button></li>))}
        
        </ul>
    </div>
  );
}

export default App;
