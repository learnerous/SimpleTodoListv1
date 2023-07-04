import React, {useEffect, useState} from 'react'

import TodoList from "../TodoList/TodoList";
import {BiMessageSquareAdd} from "react-icons/bi";
import axios from "axios";
import AddTodoList from "./AddTodoList";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import {Filter} from "tabler-icons-react";
import "./MainTodoList.css";
export default  function MainTodoList()  {
    const [TodoLists, setTodoLists] = useState([]);
    const UserName=JSON.stringify(localStorage.getItem('user'));
    function  filterByStatus(filter)
    {
         axios.get('http://127.0.0.1:8000/TodoListByStatus/'+filter)
            .then((res) => {
            setTodoLists(res.data.query);
                console.log(res.data.query)

        });
    }



    function  filterByDate()
    {
        axios.get('http://127.0.0.1:8000/EndedOrNot')
            .then((res) => {
                setTodoLists(res.data);
                console.log(res.data)


            });
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/TodoLists').then((res) => {
            setTodoLists(res.data);
        });
    }, []);
    const renderList=TodoLists.map(todo=>(
        <TodoList {...todo} key={todo.id}/>
    ))
    return (
        <div>
            <h1>ToDoLists</h1>
            <h1>{UserName}</h1>
            <div>
                <div className="filters">
                    <button onClick={()=>filterByStatus("done")}>Done</button>
                    <button onClick={()=>filterByStatus("todo")}>Todo</button>
                    <button onClick={()=>filterByDate()} >Late tasks</button>
                </div>
            </div>
            <div className="h-full px-6 py-12 TodoList__container">
                {
                    renderList
                }

                <AddTodoList></AddTodoList>

            </div>
        </div>
    )
}


