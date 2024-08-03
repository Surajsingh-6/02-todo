import React, { useState } from "react";
import "./todo.css";

function Todo() {
    const [todolist, setTodolist] = useState(["MY TODO LIST"]);
    const [getInput, setGetInput] = useState("");
    const Additem = (e) => {
        e.preventDefault();
        setTodolist([...todolist, getInput]);
        setGetInput("");
    };
    const deleteItem = (index) => {
        const updatedList = [...todolist];
        updatedList.splice(index, 1);
        setTodolist(updatedList);
    };

    return(
    <>
        <h1>Todo List</h1>
        <form onSubmit={Additem}>
            <input
                type="text"
                value={getInput}
                onChange={(e) => setGetInput(e.target.value)}
            />
        </form>
        <ul>
            {todolist.map((item) => (
                <li key={item}>
                    {item}{" "}
                    <button
                        onClick={(index) => {
                            deleteItem(index);
                        }}
                    >
                        Delete me
                    </button>
                </li>
            ))}
        </ul>
    </>);
}
export default Todo;
