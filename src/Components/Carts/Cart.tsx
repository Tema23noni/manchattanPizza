import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {  useSelector } from "react-redux";
import {  useAppDispatch } from "../../Redux/store";
import cl from './Carts.module.scss'
import { cartIdSelector } from "../../Redux/Cart/selectors";
import { TPizzaItem } from "../../Redux/Cart/types";
import { addItems } from "../../Redux/Cart/slice";

type MenuCardProps ={
    id:string;
    url:string;
    title: string;
    price: number;
    size: number[];
    type: number[]
}

const typesNames:string[] = ['Тонкая','Традиционная']

const Cart: React.FC<MenuCardProps> = ({id,url, title, price,size,type}) => {
    const dispatch = useAppDispatch();
    const cartItem = useSelector(cartIdSelector(id));  
    
    const addCount:number = cartItem? cartItem.count: 0

    const [activeType, setActiveType] = useState<number>(0);
    const [activeSize, setActiveSize] = useState<number>(0);
    
    const addPizza = () =>{
        const item:TPizzaItem = {
            id,
            title,
            price,
            url,
            size: size[activeSize],
            type: typesNames[activeType],
            count:0
        }
        dispatch(addItems(item))
    }
  return(
    <div className={cl.MenuCard}>
        <Link to={`/pizza/${id}`}><img src={url} width={120} height={120} alt="" /></Link>
        <p className={cl.title}>{title}</p>
        <div className={cl.width}>
            {
                type.map((e:number,i:number) =>{
                    return <button onClick={()=> setActiveType(i)} key={e} className={activeType === i? cl.active: ''}>{typesNames[i]}</button>
                })
            }
        </div>
        <div className={cl.long}>
            {size.map((item:number,i:number)=>{
                return <button key={item} onClick={()=> setActiveSize(i)}  className={activeSize === i? cl.active: ''}>{size[i]}см</button>
            })}
        </div>
        <div className={cl.price}>
            <p>{price} руб.</p>
            <button onClick={addPizza}>
                 Добавить {addCount >0 && <span>{addCount}</span>}
            </button>
        </div>
    </div>
  );
};

export default Cart;
