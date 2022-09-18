import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reduser";

const store = configureStore({
    reducer: reducer,
});

export default store;
