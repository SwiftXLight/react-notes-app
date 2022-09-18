import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, removeTodos, updateTodos } from "../redux/reduser";
import Item from "../interfaces/Item"

let utc = new Date().toJSON().slice(0,10);
const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

const mapStateToProps = (state: Item) => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        addTodo: (obj: object) => dispatch(addTodos(obj)),
        removeTodo: (id: number) => dispatch(removeTodos(id)),
        updateTodo: (obj: object) => dispatch(updateTodos(obj)),
    }
}

const Todos = (props: any) => {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoDescription, setTodoDescription] = useState("");
    const [todoCategory, setTodoCategory] = useState("Task");

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoTitle(e.target.value);
    };
    const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTodoDescription(e.target.value);
    };
    const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTodoCategory(e.target.value);
    };

    return <div className="addTodos">

        <div className="notes-titles">
            <p>Name</p>
            <p>Created</p>
            <p>Category</p>
            <p>Content</p>
            <p>Dates</p>
            <p> <span className="options">
                <i className="fa-solid fa-box-archive"></i>
                <i className="fas fa-trash-alt"></i>
                </span>
            </p>
        </div>

        <ul className="notes-list">
            {props.todos.map((item: Item) => {
                let dates = "";
                if (item.description.match(reg)) {
                    dates = item.description.match(reg)!.join(", ");
                }
                return <li key={item.id} className="list-item">
                    <span className="title fw-bold">{item.title}</span>
                    <span className="createdDate small text-secondary">{item.createdDate}</span>
                    <span className="category fw-bold">{item.category}</span>
                    <span className="description small text-secondary">{item.description}</span>
                    <span className="dates small text-secondary">{dates}</span>

                    <span className="options">
                        <i className="fa-solid fa-box-archive"></i>
                        <i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form" aria-hidden="true"
                            onClick={() => props.removeTodo(item.id)}></i>
                        <i className="fas fa-trash-alt" onClick={() => props.removeTodo(item.id)}></i>
                    </span>
                </li>;
            })}
        </ul>    

        <button
            id="addNew"
            data-bs-toggle="modal"
            data-bs-target="#form"
            className="add-btn"
        >
            Add
        </button>
        <br />

        <button className="toggle-notes">
            Active / Archive
        </button>

        <div className="summary-titles">
            <p>Note Category</p>
            <p>Active</p>
            <p>Archived</p>
        </div>
        <ul className="summary-list">
            <li className="summary-item">
                <p>Task</p>
                <p id="task-active"></p>
                <p id="task-archive"></p>
            </li>
            <li className="summary-item">
                <p>Random Thought</p>
                <p id="random-thought-active"></p>
                <p id="random-thought-archive"></p>
            </li>
            <li className="summary-item">
                <p>Idea</p>
                <p id="idea-active"></p>
                <p id="idea-archive"></p>
            </li>
        </ul>

        <form className="modal fade" id="form" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Task Name</p>
                    <input type="text" className="form-control" name="" id="textInput" 
                    onChange={(e) => handleTitleChange(e)}/>
                    <div id="msg"></div>
                    <br />
                    <p>Content</p>
                    <textarea name="" className="form-control" id="textarea" cols={30} rows={5} 
                    onChange={(e) => handleDescriptionChange(e)}></textarea>
                    <br />
                    <p>Category</p>
                    <select name="category" className="form-control" id="category"
                    onChange={(e) => handleCategoryChange(e)}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                      </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button
                    type="button"
                    id="add"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={() => props.addTodo({
                        id: Math.floor(Math.random()*1000),
                        title: todoTitle,
                        createdDate: utc,
                        category: todoCategory,
                        description: todoDescription,
                        isArchived: false
                    })}
                    >
                      Add
                    </button>
                </div>
            </div>
        </div>
      </form>
    </div>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);