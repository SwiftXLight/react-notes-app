import React from "react";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";

const AddBtn: React.FC = () => {
    return  <motion.button
                id="addNew"
                data-bs-toggle="modal"
                data-bs-target="#form"
                className="flex justify-center items-center ml-4 cursor-pointer text-2xl w-14 h-14 bg-add-btn-bg outline-none border-2 border-text-main rounded-full drop-shadow-add-btn-shadow text-text-main"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
            <GoPlus />
            </motion.button>;
}

export default AddBtn;