import React, { useState } from "react";

const Todos = () => {

    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoCategory, setTodoCategory] = useState("");

    const handleTitleChange = (e) => {
        setTodoTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setTodoDescription(e.target.value);
    };
    const handleCategoryChange = (e) => {
        setTodoCategory(e.target.value);
    };

    console.log("todo text:", todoTitle, todoCategory, todoDescription);
    return <div className="addTodos">
    
        <input 
            type="text"
            onChange={(e) => handleTitleChange(e)} 
            className="todo-title-input"
        />

        <select
            name="category"
            onChange={(e) => handleCategoryChange(e)}  
            className="todo-category-input">

            <option value="Task">Task</option>
            <option value="Random Thought">Random Thought</option>
            <option value="Idea">Idea</option>
        </select>

        <input 
            type="text"
            onChange={(e) => handleDescriptionChange(e)}  
            className="todo-description-input"
        />

        <button className="add-btn">
            Add
        </button>

    </div>;
};

export default Todos;