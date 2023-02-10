import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { addItems } from "../../Redux/Cart/slice";
import { TPizzaItem } from "../../Redux/Cart/types";
import { useAppDispatch } from "../../Redux/store";

import cl from './PizzaItem.module.scss'

const typesNames: string[] = ['Тонкая','Традиционная']

const PizzaItem: React.FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [activeSize, setActiveSize] = useState<number>(0);
    const [activeType,setActiveType] = useState<number>(0);
    const [pizzaData, setPizzaData] = useState<{
        url: string,
        title: string,
        price: number,
        sizes: number[],
        types: number[]
    }>()
    const {id}= useParams()



    const addPizza = () =>{
        let item;
        if(pizzaData){
            item = {
                id,
                title: pizzaData.title,
                price: pizzaData.price,
                url: pizzaData.url,
                size: pizzaData.sizes[activeSize],
                type: typesNames[activeType],
                count:0
            }
            dispatch(addItems(item as TPizzaItem))
        }
    }
    useEffect(() =>{
        async function fetchPizzaId(){
            try{
                const {data} = await axios.get("https://63c7f765075b3f3a91d71330.mockapi.io/items/"+id)

                setPizzaData(data)
            }catch(err){
                alert('Пицца не найдена')                
                const timeout = setTimeout(() =>{
                    navigate('/menu')
                },1000)
                return () => clearTimeout(timeout)
            }
        }
        fetchPizzaId()

    }, [])
    if(pizzaData === undefined){
        return (
            <div className={cl.content}>
                <div className={cl.balls}>
                <div></div>
                <div></div>
                <div></div>
                </div>
            </div>
        )
    }
    
  return (
  <div className={cl.PizzaItem}>
    <div className="cont">
       <div className={cl.content}>
            <h2>{pizzaData.title}</h2>
            <div className={cl.image}>
                <img src={pizzaData.url} />
            </div>
            <div className={cl.choice}>
                <div className={cl.width}>
                    {
                        pizzaData.types.map((_,id:number) =>{
                            return <button onClick={()=> setActiveType(id)} className={activeType === id? cl.active: ''} key={id}>{typesNames[id]}</button>
                        })
                    }
                </div>
                <div className={cl.long}>
                    {pizzaData.sizes.map((item:number,id:number)=>{
                        return <button key={id} onClick={()=> setActiveSize(id)} className={activeSize === id? cl.active: ''}>{item}см</button>
                    })}
                </div>
            </div>
            <div className={cl.btn}>
                <Link to="/menu">В меню</Link>
                <button onClick={addPizza}>В корзину <span>{pizzaData.price} руб.</span></button>
            </div>
       </div >
    </div>
  </div>
  );
};

export default PizzaItem;
