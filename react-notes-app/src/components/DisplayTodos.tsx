import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  archiveTodos,
  removeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import NotesTitles from "../layouts/NotesTitles"
import { AnimatePresence, motion } from "framer-motion";

const mapStateToProps = (state: any) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: (arg0: { payload: any; type: string; }) => any) => {
  return {
    addTodo: (obj: object) => dispatch(addTodos(obj)),
    removeTodo: (id: number) => dispatch(removeTodos(id)),
    archiveTodo: (id: number) => dispatch(archiveTodos(id)),
  };
};

const DisplayTodos = (props: { todos: any[]; removeTodo: any; archiveTodo: any; }) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("archived")}
        >
          Archived
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <NotesTitles />
      <ul>
        <AnimatePresence>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.isArchived === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      archiveTodo={props.archiveTodo}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "archived"
            ? props.todos.map((item) => {
                return (
                  item.isArchived === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      archiveTodo={props.archiveTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    archiveTodo={props.archiveTodo}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
