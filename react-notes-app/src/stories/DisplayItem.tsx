import React from "react";
import { connect } from "react-redux";
import {
  addTodos,
  archiveTodos,
  removeTodos,
} from "../redux/reducer";
import type { RootState, AppDispatch } from '../redux/store';
import TodoItem from "../components/TodoItem";
import { AnimatePresence } from "framer-motion";
import Item from "interfaces/Item";

const mapStateToProps = (state: RootState) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    addTodo: (obj: Item) => dispatch(addTodos(obj)),
    removeTodo: (id: number) => dispatch(removeTodos(id)),
    archiveTodo: (id: number) => dispatch(archiveTodos(id)),
  };
};

const DisplayTodos = (props: { 
  todos: Item[];
  removeTodo: (id: number ) => {payload: number; type: string};
  archiveTodo: (id: number ) => {payload: number; type: string};
  }) => {

  return (
    <div className="flex flex-col items-center mt-12">
      <div className="mb-8">

      <ul className="todos-list flex-column mb-4">
        <AnimatePresence>
          {props.todos.length > 0
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
        </AnimatePresence>
      </ul>   
    </div>
</div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodos);
