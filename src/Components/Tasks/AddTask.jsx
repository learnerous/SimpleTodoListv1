import React, {useState} from 'react'
import axios from "axios";
import "./AddTask.css";
function AddTaskToTodoList(id,d){
    console.log(d);
    console.log(id);
    axios.patch("http://127.0.0.1:8000/TodoListTaskAdd/"+id,d)
        .then((r)=>console.log(r))
        .catch((e)=>console.log(e))

}


function AddTask(props) {
    const [Title,setTitle]=useState('');
    const [Description,setDescription]=useState('');
    const data={
        "TaskTitle":Title,
        "description":Description
    }
    return (
        <div className="Container__taskAdd">

                <label>
                    Title:
                    <input type="text" name="name" onChange={(e)=>setTitle(e.target.value)}/>
                </label>
                <br/>
                <label>
                    description:
                    <input type="text" name="name" onChange={(e)=>setDescription(e.target.value)} />
                </label>
                <br/>
                <input type="submit" value="Submit" onClick={()=>AddTaskToTodoList(props.ID,data)
                } />

        </div>
    )
}

export default AddTask
