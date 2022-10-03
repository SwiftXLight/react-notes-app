import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import AddBtn from "../layouts/AddBtn";
import Item from "../interfaces/Item";
import type { RootState, AppDispatch } from '../redux/store';
import Modal from "./UI/Modal";
//import Example from "./UI/TestModal";

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

  return (
    <div className="flex justify-center">
      
      <AddBtn />
      
      <Modal todoTitle={todoTitle} todoCategory={todoCategory} todoDescription={todoDescription}
        onChangeTitle={handleTitleChange} onChangeDescription={handleDescriptionChange} onChangeCategory={handleCategoryChange}
        onClick={() => add()}
      />

    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
