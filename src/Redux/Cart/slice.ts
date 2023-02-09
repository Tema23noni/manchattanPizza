import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getItemsFromLS } from "../../utils/getItemsFromLS"
import { ICartState, TPizzaItem } from "./types"

const {items, totalPrice} = getItemsFromLS()

export const initialState:ICartState = {
    totalPrice,
    items
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItems(state, action:PayloadAction<TPizzaItem>){
            const findItem = state.items.find((obj) => obj.id === action.payload.id)
            if(findItem?.count){
                findItem.count++
            }else{
                state.items.push({
                    ...action.payload,
                    count: 1,
                })
            }
            state.totalPrice =  state.items.reduce((sum, item) => sum+(item.count * item.price),0)
        },
        minusItems(state,action:PayloadAction<string>){
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if(findItem?.count &&findItem.count > 1){
                findItem.count--;
            }
            state.totalPrice = state.items.reduce((sum, item) => sum+(item.count * item.price),0)
        },
        removeItem(state, action:PayloadAction<string>){
            state.items = state.items.filter((obj) => obj.id !== action.payload)
            state.totalPrice = state.items.reduce((sum, item) => sum+(item.count * item.price),0)
        },
        clearItems(state){
            state.items = []
            state.totalPrice =0
        }
    }
})
export const {addItems, removeItem, clearItems, minusItems} = cartSlice.actions;

export default cartSlice.reducer;