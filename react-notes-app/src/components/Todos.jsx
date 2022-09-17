import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reduser";

const mapStateToProps = (state) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (obj) => dispatch(addTodos(obj)),
    }
}

const Todos = (props) => {

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

    console.log("todo text:", props);
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

        <button
            className="add-btn"
            onClick={() => props.addTodo({
                id: Math.floor(Math.random()*1000),
                title: todoTitle,
                createdDate: "curDate",
                category: todoCategory,
                description: todoDescription,
                dates: "datesFromDescription",
                isArchived: false
            })}
        >
            Add
        </button>
        <br />

        <ul>
            {props.todos.map((item) => {
                return <li key={item.id}>
                    <span className="title">{item.title}</span>
                    <span className="createdDate">{item.createdDate}</span>
                    <span className="category">{item.category}</span>
                    <span className="description">{item.description}</span>
                    <span className="dates">{item.dates}</span>
                    </li>;
            })}

        </ul>    
    </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);