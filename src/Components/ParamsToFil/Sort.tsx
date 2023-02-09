import React, {useCallback, useState} from "react";
import { useRef } from "react";
import { useEffect } from "react";
import {  useSelector } from "react-redux";

import cl from '../../Pages/Menu/Menu.module.scss'
import { setDescOrAsc, setSort } from "../../Redux/Filter/slice";
import { RootState, useAppDispatch } from "../../Redux/store";

type SortItem = {
    name:string,
    sortBy: string
}

export const sortObj: SortItem[] = [
    {name:'По цене', sortBy: 'price'},
    {name:'По рейтингу', sortBy: 'rating'},
    {name:'По алфавиту', sortBy: 'title'}
];

const Sort:React.FC = () => {
    const {sort, descOrAsc} = useSelector((state: RootState )=> state.filter);
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null)
    
    const selectType = useCallback((value:number) =>{
        dispatch(setSort(sortObj[value]))
        setOpen(!open)
                
    },[])
    const onChangeHow = () =>{
        setOpen(!open)
        if(open === true){
            descOrAsc === 'desc'? dispatch(setDescOrAsc(('asc'))): dispatch(setDescOrAsc('desc'))
        }
    }
    useEffect(() =>{
        const handleOutside = (e:MouseEvent):void =>{
            const _event = e as MouseEvent & {path: Node[]}
            if(sortRef.current && !_event.path.includes(sortRef.current)){
                setOpen(false)
            }
        } 
        document.body.addEventListener('click', handleOutside);
        return () => document.body.removeEventListener('click',handleOutside)
    }, [])
  return (
  <div className={cl.sort} ref={sortRef}>
    <button onClick={onChangeHow} >{sort.name}</button>
    {
        open && (
            <div >
                <ul>
                    {sortObj.map((e,i:number) =>{
                        return <li
                        key={i}
                        onClick={()=> selectType(i)}
                        className={sort.name === e.name ? cl.active : ''}
                        >
                        {e.name}
                        </li>
                    })}
                </ul>
            </div>
        )
    }
  </div>
  );
}

export default Sort;
