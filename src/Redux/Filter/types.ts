export type TSort ={
    name:string;
    sortBy:string
}

export interface IFilterSliceState {
    sort : TSort;
    descOrAsc: string;
    searchValue: string;
    currentPage: number;
    categoryId : number;
}