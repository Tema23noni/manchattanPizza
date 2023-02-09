import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchPizza } from "../AsyncThunk/FetchPizzaAsync";
import { Status, TItems, TPizzaData } from "./types";

const initialState:TPizzaData = {
    items : [],
    status : Status.LOADING
}

export const pizzaDataSlice = createSlice({
    name: "pizzaData",
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TItems[]>) {
            state.items = action.payload;
          },
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPizza.pending, (state) =>{
            state.status = Status.LOADING;
            state.items = []
        });
        builder.addCase(fetchPizza.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.OK
        });
        builder.addCase(fetchPizza.rejected, (state) => {
            state.items = []
            state.status = Status.ERROR
        });
    }
    // extraReducers:{
    //     [fetchPizza.pending]: (state) => {
    //         state.status = 'loading'
    //     },
    //     [fetchPizza.fulfilled]: (state,action) => {
    //         state.items = action.payload
    //         state.status = 'OK'
    //     },
    //     [fetchPizza.rejected]: (state,action) => {
    //         state.items = []
    //         state.status = 'Error'
    //     }
    // }
})

export default pizzaDataSlice.reducer;