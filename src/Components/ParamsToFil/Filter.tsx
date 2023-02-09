import React, {useState, useRef, useEffect} from "react";
import { useSelector } from "react-redux";

import cl from '../../Pages/Menu/Menu.module.scss'
import { setCategoryId } from "../../Redux/Filter/slice";
import { RootState, useAppDispatch } from "../../Redux/store";

const pizzaArrToSort:string[] = ['Все','Мясная','Вегетарианская','Гриль','Острая','Закрытая']

const Filter:React.FC = () => {
    const dispatch = useAppDispatch()
    const categoryId = useSelector((state:RootState) => state.filter.categoryId);

    const [open, setOpen] = useState<boolean>(false)
    const filterRef = useRef<HTMLDivElement>(null);
    const addTo = (index:number) => {
        dispatch(setCategoryId(index))
        setOpen(!open)
    }
    useEffect(() =>{
        const handleOutside = (e: MouseEvent) => {
            const _event = e as MouseEvent & {path: Node[]}
            if(filterRef.current && !_event.path.includes(filterRef.current)){
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleOutside);
        return () => document.body.removeEventListener('click',handleOutside)
    }, [])

  return (
  <div className={cl.sortPizza} ref={filterRef}>
    <button onClick={() => setOpen(!open)} className={open? cl.active: ''}>{pizzaArrToSort[categoryId]}</button>
    {
        open && (
            <div>
                <ul className={cl.Menu__filters__btn}>
                {
                    pizzaArrToSort.map((item:string,i:number)=>{
                        return <li key={i} onClick={() => addTo(i)} className={categoryId === i? cl.active : ''}>{item}</li>
                    })
                }
                </ul>
            </div>
        )
    }
  </div>
  );
};

export default Filter;
