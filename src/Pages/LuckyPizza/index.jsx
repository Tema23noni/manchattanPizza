import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import {HiArrowDown} from 'react-icons/hi'
import { useNavigate } from "react-router-dom";
import cl from './LuckyPizza.module.scss'
import NewItems from "./NewItems";



const LuckyPizza = () => {
  const navigate = useNavigate()
  const [allPizza, setAllPizza] = useState([]);
  const isMounted = useRef(false);
  const [isStarted, setIsStarted] = useState(false);
  const [winner, setWinner] = useState();
  const [update, setUpdate] = useState(0)
  const [promo,setPromo] = useState()
  const cells = 50;
  const rouletteRef = useRef(null);
  const fetchAllPizza = async() =>{
    try{
      const {data} = await axios.get("https://63c7f765075b3f3a91d71330.mockapi.io/items");
      setAllPizza(data);      
    }catch{
      alert('Произошла ошибка');
      const nextPage = setTimeout(() =>{
        navigate('/')
      },1000)
      return () => clearTimeout(nextPage)
    }
  }
  const newItems = <NewItems started={isStarted} setPromo={setPromo} win={winner} setWin={setWinner} setStarted={setIsStarted} dataPizzas={allPizza} cells={cells}/>

  useEffect(() =>{
    if(!isMounted.current){
      fetchAllPizza()
    }
    isMounted.current =true
  }, [])
  return (
  <div className={cl.root}>
    
      <h2>Выиграй бесплатную <span>пиццу</span></h2>
    <div className={cl.winner}> 
      {winner && <p className={cl.win}>Вы выиграли пиццу {winner.title}</p>}
      {promo ?<p> Ваш промокод <span>${promo}</span></p>:''  }
    </div> 
    <div className="cont">
      <div className={cl.LuckyPizza}>
        <div>
          <div className={cl.pointer}><HiArrowDown className={cl.arrow}/></div>
          <div className={cl.roulette} ref={rouletteRef}>
            {allPizza.length && newItems}
          </div>
        </div>
        <button onClick={() => setIsStarted(true)} disabled={winner? true:false} className={cl.spinToWin}>Получить халяву! </button>
      </div>
    </div>
  </div>
)};

export default LuckyPizza;
