import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  archiveTodos,
  removeTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import NotesTitles from "../layouts/NotesTitles"
import SummaryTitles from "layouts/SummaryTitles";
import { AnimatePresence, motion } from "framer-motion";
import Item from "interfaces/Item";

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

const DisplayTodos = (props: any) => {
  let activeIdea = 0;
  let activeTask = 0;
  let activeRandomThought = 0;
  let archiveIdea = 0;
  let archiveTask = 0;
  let archiveRandomThoughtArc = 0;
  for (let i = 0; i < props.todos.length; i++) {
    if (props.todos[i].category === "Idea" && !props.todos[i].isArchived) {
      activeIdea++;
    } else if (props.todos[i].category === "Idea" && props.todos[i].isArchived) {
      archiveIdea++;
    } else if (props.todos[i].category === "Task" && !props.todos[i].isArchived) {
      activeTask++;
    } else if (props.todos[i].category === "Task" && props.todos[i].isArchived) {
      archiveTask++;
    } else if (props.todos[i].category === "Random Thought" && !props.todos[i].isArchived) {
      activeRandomThought++;
    } else if (props.todos[i].category === "Random Thought" && props.todos[i].isArchived) {
      archiveRandomThoughtArc++;
    }
  }

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
      <ul className="todos-list">
        <AnimatePresence>
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item: Item) => {
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
            ? props.todos.map((item: Item) => {
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
            ? props.todos.map((item: Item) => {
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

      <SummaryTitles />
      <ul className="summary-list">
        <li className="summary-item">
          <span>Task</span>
          <span id="task-active">{activeTask}</span>
          <span id="task-archive">{archiveTask}</span>
        </li>
        <li className="summary-item">
          <span>Random Thought</span>
          <span id="random-thought-active">{activeRandomThought}</span>
          <span id="random-thought-archive">{archiveRandomThoughtArc}</span>
        </li>
        <li className="summary-item">
          <span>Idea</span>
          <span id="idea-active">{activeIdea}</span>
          <span id="idea-archive">{archiveIdea}</span>
        </li>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
