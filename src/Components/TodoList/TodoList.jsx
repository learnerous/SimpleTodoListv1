import React, {useState} from "react";
import "./TodoList.css";
import axios from "axios";
import {BiMessageSquareAdd} from "react-icons/bi";
import AddTodoList from "../MainTodoList/AddTodoList";
import AddTask from "../Tasks/AddTask";


let c=0;

function deleteTodoList(id) {
    axios.delete("http://127.0.0.1:8000/RemoveTodoList/"+id).then(r => {
        console.log(r)
    }
    ).catch(e=>console.log(e));
}
function UpdateTodoList(data,id){
    if (c==1){
        axios.patch ("http://127.0.0.1:8000/UpdateTodoList/"+id,data)
            .then(r=>console.log(r))
            .catch(e=>console.log(e))
        c=0
    }
    else c=1

}


const TodoList=(
    {
    id='',
    title='',
    CreatedBy='',
    CreateAtdate='',
    EndsBy='',
    note='',
    status='',
    Tasks=[],}
)=> {
    const [Edited, setEdited] = useState(false);
    const [hiddenTasks, setHiddenTasks] = useState(false);
    const [AddTasks, setAddTasks] = useState(false);
    const data={
        "id": id,
        "title": title,
        "note": note,
        "status": status,
        "CreatedBy":CreatedBy,
        "EndsBy": EndsBy,
        "CreateAtdate": CreateAtdate,
        "Tasks": Tasks,
    }
    return (
        <div className="ccc">

            <div className="conContainer">

                <div className=" container">
                    <ul className="TodoList__list">
                        <li> {Edited ?<input placeholder={id} onChange={(e)=>data.id=e.target.value}></input> :<span>id :{id}</span>}</li>
                        <li>{Edited ? <input placeholder={CreatedBy } onChange={(e)=>data.CreatedBy=e.target.value}></input> :<span>CreatedBy: {CreatedBy}</span>}</li>
                        <li>{Edited ? <input placeholder={note} onChange={(e)=>data.note=e.target.value}></input> :<span>Note: {note}</span>}</li>
                        <li>{Edited ? <input placeholder={EndsBy} onChange={(e)=>data.EndsBy=e.target.value}></input> :<span>EndsAt :{EndsBy}</span>}</li>
                        <li>{Edited ? <input placeholder={CreateAtdate} onChange={(e)=>data.CreateAtdate=e.target.value}></input> :<span>CreatedAt :{CreateAtdate}</span>}</li>
                        <li>{Edited ? <input placeholder={title} onChange={(e)=>data.title=e.target.value}></input> :<span>Title :{title}</span>}</li>
                        <li>{Edited ? <input placeholder={status} onChange={(e)=>data.status=e.target.value}></input> :<span>Status: {status}</span>}</li>
                        <button onClick={() => deleteTodoList(id)}>Delete</button>
                        <button onClick={async () => {
                            !Edited ? setEdited(!Edited) :data.id=id+1;
                            console.log(data);
                            UpdateTodoList(data,id);
                            setEdited(!Edited)

                        }}>Update
                        </button>
                        <button onClick={() => {
                            setHiddenTasks(!hiddenTasks)
                        }}>Show Tasks
                        </button>
                    </ul>
                    <BiMessageSquareAdd className="Icon__Add" size="100px" onClick={()=>setAddTasks(!AddTasks)}/>
                    {AddTasks ?<AddTask ID={id}  /> :<></>}
                    <div className="Tasks__Show">
                        {hiddenTasks &&  <table>
                            <tr>
                                <th>TaskStatus</th>
                                <th>TaskTitle</th>
                                <th>TaskDescription</th>
                            </tr>
                            {Tasks[0].map(task =>{
                                return(
                                <tr key={task.id} className="Wraped__stuff">
                                    <td>{task.taskStatus}</td>
                                    <td>{task.taskTitle}</td>
                                    <td>{task.description}</td>
                                    <br/>
                                </tr>)}
                            )}
                        </table>}

                    </div>
                </div>
            </div>
        </div>
    );
};
export default TodoList;