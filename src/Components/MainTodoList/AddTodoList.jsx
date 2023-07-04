import React, {useEffect, useState} from 'react'
import axios from "axios";
import "./AddTodoList.css";

function AddTodoList() {
    const [Title,setTitle]=useState('');
    const [Note,setNote]=useState('');
    const [Status,setStatus]=useState('');
    const [createAtdate,setCreateAtdate]=useState('');
    const [Endsby,setEndsBy]=useState('');
    const [Createdby,setCreatedBy]=useState('');
    const data={
        title:Title,
        note:Note,
        status:Status,
        CreateAtdate:createAtdate,
        EndsBy:Endsby,
        CreatedBy:Createdby,
    }
    function SubmitHandler() {
        axios.post("http://127.0.0.1:8000/AddTodoList", data)
            .then(r => {
                console.log(data)})
            .catch(r=>{
                console.log(data)})
        window.location.reload(false);

    }


    return (
        <div>
            <div className="form Container__AddTask">
                <div className="form-body">
                    <div className="title">
                        <label className="form__label" htmlFor="title">Title </label>
                        <input className="form__input" type="text" id="Title" placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                    <div className="Note">
                        <label className="form__label" htmlFor="Note">Note </label>
                        <input type="text" name="" id="Note" className="Note" placeholder="Note" onChange={(e)=>setNote(e.target.value)}/>
                    </div>
                    <div className="status">
                        <label className="form__label" htmlFor="status">Status </label>
                        <input type="Text" id="status" className="form__input" placeholder="Status" onChange={(e)=>setStatus(e.target.value)}/>
                    </div>
                    <div className="CreateAtdate">
                        <label className="form__label" htmlFor="Date">DateOfCreation </label>
                        <input className="form__input" type="Date" id="CreationDate" placeholder="Date" onChange={(e)=>setCreateAtdate(e.target.value)}/>
                    </div>
                    <div className="EndsBy">
                        <label className="form__label" htmlFor="Date">Deadline </label>
                        <input className="form__input" type="Date" id="DeadlineDate" placeholder="Date" onChange={(e)=>setEndsBy(e.target.value)}/>
                    </div>
                    <div className="CreatedBy">
                        <label className="form__label" htmlFor="CreatedBy">CreatedBy </label>
                        <input className="form__input" type="Text" id="CreatedBy"
                               placeholder="YourName"
                               onChange={(e)=>setCreatedBy(e.target.value)}/>
                    </div>
                </div>
                <div className="footer">
                    <button type="submit" className="btn" onClick={SubmitHandler}>Add a TodoList</button>
                </div>
            </div>
        </div>
    )
}

export default AddTodoList
