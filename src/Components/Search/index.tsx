import React, { useState, useRef,useCallback,useEffect} from "react";
import debounce from "lodash.debounce";

import cl from './Search.module.scss';
import { useAppDispatch } from "../../Redux/store";
import { setSearchValue } from "../../Redux/Filter/slice";

type Popup = MouseEvent & {
  path: Node[]
}

const Search:React.FC = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const updateInput =  useCallback(
    debounce((value:string) => {
      dispatch(setSearchValue(value))
    },1000),[]
  )
  const changeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setValue(e.target.value);
    updateInput(e.target.value)
  } 
  const removeSearch = (e:React.MouseEvent) =>{
    e.stopPropagation()
    dispatch(setSearchValue('')); 
    setValue('')
    inputRef.current?.focus()
  }
  useEffect(() =>{
    const handleOutside = (e:MouseEvent) => {
      const _event = e as Popup
      if(searchRef.current && !_event.path.includes(searchRef.current)){
        setOpen(false)
      }
    };
    document.body.addEventListener('click', handleOutside);
    return () => document.body.removeEventListener('click',handleOutside)
}, [])
  
  return( 
  <div className={cl.root} ref={searchRef} onClick={():void => {setOpen(!open);inputRef.current?.focus()}}>
    <span  className={open? [cl.iconSearch,cl.active].join(' '):cl.iconSearch}></span>
    <input className={open? cl.active:''} ref={inputRef} placeholder="Поиск пицц" onChange={changeInput} onClick={(e:React.MouseEvent) => e.stopPropagation()} value={value} type='text'/>
    <span onClick={removeSearch} className={open? [cl.iconDelete, cl.active].join(' '): cl.iconDelete }></span>
  </div>
)};

export default Search;
