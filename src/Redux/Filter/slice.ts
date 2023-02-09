import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFilterSliceState, TSort } from "./types"

const initialState:IFilterSliceState = {
    categoryId : 0,
    sort : {
        name: "По рейтингу",
        sortBy: 'rating'
    },
    descOrAsc: 'desc',
    searchValue: '',
    currentPage: 1
}

export const filterSlice = createSlice({
    name: "filter", 
    initialState,
    reducers: {
        setCategoryId(state, action:PayloadAction<number>){
            state.categoryId = action.payload
        },
        setSort(state, action:PayloadAction<TSort>){
            state.sort = action.payload
        },
        setDescOrAsc(state, action:PayloadAction<string>){
            state.descOrAsc = action.payload
        },
        setSearchValue(state, action:PayloadAction<string>){
            state.searchValue = action.payload
        },
        setCurrentPage(state,action:PayloadAction<number>){
            state.currentPage = action.payload
        },
        setFilters(state,action:PayloadAction<any>){
            state.currentPage = Number(action.payload.currentPage);
            state.categoryId = Number(action.payload.categoryId);
            state.sort.sortBy = action.payload.sort;
            state.descOrAsc = action.payload.descOrAsc;
        }
    }
})

export const {setCategoryId, setSort, setDescOrAsc, setSearchValue,setCurrentPage, setFilters} = filterSlice.actions;

export default filterSlice.reducer;