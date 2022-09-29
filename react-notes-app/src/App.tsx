import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

const App: React.FC = () => {
    return (
        <div className="font-RocknRoll flex flex-col pt-12 items-center bg-no-repeat bg-cover bg-fixed overflow-x-hidden bg-gradient-to-b from-app-bg-start to-app-bg-end">
          <motion.h1
            className="inline text-text-main mb-8 drop-shadow-h1-shadow text-4xl"
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
          >
            Notes App
          </motion.h1>
          <motion.div
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", duration: 1 }}
          >
            <Todos />
            <DisplayTodos />
          </motion.div>
        </div>
      );
}

export default App;