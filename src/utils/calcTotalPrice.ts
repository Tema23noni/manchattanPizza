import { TPizzaItem } from "../Redux/Cart/types"

export const calcTotalPrice = (items:TPizzaItem[]) =>{
    return items.reduce((count:number, item) => count + (item.price * item.count), 0)
} 