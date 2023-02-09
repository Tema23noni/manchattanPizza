import { configureStore } from "@reduxjs/toolkit";
import filter from "./Filter/slice";
import cart from "./Cart/slice"
import pizzaData from './PizzaData/slice'
import { useDispatch } from "react-redux";

export const store = configureStore({
    reducer:{
        filter,
        cart,
        pizzaData
    }
})
export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();