import { motion } from "framer-motion";
import React from "react";

const TodoItem = (props: { item: any; removeTodo: any; archiveTodo: any; }) => {
  const { item, removeTodo, archiveTodo } = props;
  const reg = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g;

  let dates = "";
  if (item.description.match(reg)) {
    dates = item.description.match(reg).join(", ");
  }
  console.log(props);

  return (
    <motion.li
      // @ts-ignore: Unreachable code error
      initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
      animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
      whileHover={{
        scale: 0.98,
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
            <i className="fa-solid fa-box-archive"
            onClick={() => archiveTodo(item.id)}></i>
            <i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#form" aria-hidden="true"
                onClick={() => removeTodo(item.id)}></i>
            <i className="fas fa-trash-alt" onClick={() => removeTodo(item.id)}></i>
        </span>
      {item.isArchived && <span className="archived">Archived</span>}
    </motion.li>
  );
};

export default TodoItem;
