import React from "react";
import { motion } from "framer-motion";

interface ISortBtnProps {
    children: string;
    onClick: React.MouseEventHandler<HTMLElement>;
}

const SortBtn: React.FC<ISortBtnProps> = (props: ISortBtnProps) => {
    return  <motion.button
            className="px-6 py-2 rounded-2xl cursor-pointer bg-silver hover:bg-text-main focus:outline-none mr-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={props.onClick}
            >
            {props.children}
            </motion.button>
}

export default SortBtn;