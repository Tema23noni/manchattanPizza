export type TItems = {
    id: string;
    url: string;
    title: string;
    types: number[];
    sizes: number[];
    categories: number
    price: number;
    rating: number;
}
export enum Status {
    LOADING = "loading",
    OK = "OK",
    ERROR = "Error"
}
export interface TPizzaData{
    items: TItems[];
    status: Status
}