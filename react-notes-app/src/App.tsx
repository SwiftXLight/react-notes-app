import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";

const App: React.FC = () => {
    return (
        <div className="App">
          <motion.h1
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