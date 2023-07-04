import React from "react";
import {CheckIcon} from "@mantine/core";
import "./TodoList.css";

const TodoList=({
    id='',
    title='',
    CreatedBy='',
    CreateAtdate='',
    EndsBy='',
    note='',
    Status='',
    Tasks=[],
})=>(
    <div className="bg-white border border-indigo-600 border-opacity-10 rounded-md shadow-xl cursor-pointer">
        <div className="px-6 py-12 border-b-2 border-b-2 border-gray-200">
            {/* body */}
            <div className="p-122 bg-gray-100 container">
                <ul className="TodoList__list">
                    <li>{id}</li>
                    <li>{CreatedBy}</li>
                    <li>{note}</li>
                    <li>{EndsBy}</li>
                    <li>{CreateAtdate}</li>
                    <li>{title}</li>
                    <button>Delete</button>
                    <button>Update</button>
                    <button>Show Tasks</button>
                </ul>

            </div>

        </div>
    </div>
);
export default TodoList;