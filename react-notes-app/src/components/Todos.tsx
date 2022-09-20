import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import AddBtn from "../layouts/AddBtn";
import Item from "../interfaces/Item";
import type { RootState, AppDispatch } from '../redux/store';

let utc = new Date().toJSON().slice(0,10);

const mapStateToProps = (state: RootState) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addTodo: (obj: Item) => dispatch(addTodos(obj)),
  };
};

const Todos = (props: { 
  addTodo: (obj: Item) => {
    payload: Item;
    type: string;
  }}) => {
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

  const add = () => {
    if (todoTitle === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: todoTitle,
        createdDate: utc,
        category: todoCategory,
        description: todoDescription,
        isArchived: false
      });
      setTodoTitle("");
      setTodoDescription("");
      setTodoCategory("Task");
    }
  };
  //console.log("props from store", props);
  return (
    <div className="addTodos">

      <AddBtn />

      <form className="modal fade" id="form" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>Task Name</p>
                    <input type="text" className="form-control" name="" id="textInput" value={todoTitle}
                    onChange={(e) => handleTitleChange(e)}/>
                    <br />
                    <p>Content</p>
                    <textarea name="" className="form-control" id="textarea" cols={30} rows={5} value={todoDescription}
                    onChange={(e) => handleDescriptionChange(e)}></textarea>
                    <br />
                    <p>Category</p>
                    <select name="category" className="form-control" id="category" value={todoCategory}
                    onChange={(e) => handleCategoryChange(e)}>
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                      </select>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="add" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => add()}>Add</button>
                </div>
            </div>
        </div>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
