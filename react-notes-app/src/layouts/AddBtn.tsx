import React from "react";
import { motion } from "framer-motion";
import { GoPlus } from "react-icons/go";

const AddBtn: React.FC = () => {
    return  <motion.button
                id="addNew"
                data-bs-toggle="modal"
                data-bs-target="#form"
                className="add-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
            <GoPlus />
            </motion.button>;
}

export default AddBtn;