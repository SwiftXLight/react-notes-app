import { motion } from "framer-motion";
import React from "react";
import Item from "interfaces/Item";

const TodoItem = (props: 
  { item: Item;
    removeTodo: (arg0: number ) => {payload: number; type: string};
    archiveTodo: (arg0: number ) => {payload: number; type: string};
  }) => {
  const { item, removeTodo, archiveTodo } = props;
  const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

  let dates = "";
  if (item.description.match(reg)) {
    dates = item.description.match(reg)!.join(", ");
  }

  return (
    <motion.li
      // @ts-ignore: Unreachable code error
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.99,
        transition: { type: "spring", duration: 0.1 },
      }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { duration: 0.5 },
        backgroundColor: "rgba(255,0,0,1)",
      }}
      key={item.id}
      className="card"
    >
      <span className="title fw-bold">{item.title}</span>
      <span className="createdDate small text-secondary">{item.createdDate}</span>
      <span className="category fw-bold">{item.category}</span>
      <span className="description small text-secondary">{item.description}</span>
      <span className="dates small text-secondary">{dates}</span>
        <span className="options">
            <motion.i className="fa-solid fa-box-archive"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => archiveTodo(item.id)}>
            </motion.i>
            {item.isArchived === false && (
            <motion.i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form" aria-hidden="true"
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeTodo(item.id)}>
            </motion.i>
            )}
            <motion.i 
              className="fas fa-trash-alt" 
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => removeTodo(item.id)}>
            </motion.i>
        </span>
      {item.isArchived && <span className="archived">Archived</span>}
    </motion.li>
  );
};

export default TodoItem;
