import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { TItems } from "../PizzaData/types"

export type TParams = {
    sortBy: string,
    categoryBy: string,
    searchValue:string,
    currentPage:number,
    descOrAsc:string
    
}

export const fetchPizza = createAsyncThunk<TItems[],TParams>('pizzaData/fetchPizza', async (params) => {
        const {sortBy, categoryBy,searchValue,currentPage,descOrAsc} = params 
        const {data} = await axios.get<TItems[]>(`https://63c7f765075b3f3a91d71330.mockapi.io/items?page=${currentPage}&limit=4&${categoryBy}&sortBy=${sortBy}&order=${descOrAsc}&search=${searchValue}`)
        return data;
    }
)