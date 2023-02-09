export type TPizzaItem = {
    id: string;
    title: string;
    url: string;
    size: number;
    type: string;
    price: number;
    count:number;
}

export interface ICartState {
    totalPrice : number;
    items: TPizzaItem[]
}