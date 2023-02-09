import React, { useEffect, useRef, useState } from "react";
import cl from './LuckyPizza.module.scss'
const NewItems = ({cells,started, setStarted,dataPizzas, win, setWin, setPromo}) => {
    const [genPiz, setGenPiz] = useState([]);
    const [allPizza, setAllPizza] = useState([])
    const isStarted = useRef(false);
    const isFirstStart = useRef(true)
    const listRef = useRef(null);
    const isFMounted = useRef(true)

    function generateItems(){
        
        const arr = []
        if(allPizza.length){
            for (let i = 0; i < cells; i++) {
                const item = getItem()
                if(item && arr.length < 30){
                    arr.push(item)
                }

            }
            setGenPiz(arr);
        }
      }
    function getItem() {
        let item;
          const chance = Math.floor(Math.random() * 100)
          allPizza.forEach(elm => {
            if (chance < elm.chance && !item) item = elm;

          })
        if(item) return item
      }
      function start() {  
        
        if (isStarted.current) return
        else isStarted.current = true
        
        if (!isFirstStart.current){
          generateItems()
        }else{
          isFirstStart.current = false
        } 
        const fff = setTimeout(() => {
          listRef.current.style.left = '-20%'
          listRef.current.style.transform = 'translate3d(-30%-150px, 0, 0)'
        }, 0)
        const uuid = () => 'xxx_xxx_00_00'.replace(/x|0/g, v => v === 'x'
        ? String.fromCharCode(Math.floor(Math.random() * 26) + 97)
        : Math.floor(Math.random() * 10))
        const spin = () =>{
          isStarted.current = false
          item.classList.add(cl.active)
          setWin(genPiz[20])
          setStarted(false)
          setPromo(uuid())
        }
        const item = listRef.current.querySelectorAll('li')[20]
        listRef.current.addEventListener('transitionend',spin)
        
        return () => clearTimeout(fff)
      }
     
        
      useEffect(() =>{
        
        if(started && !isStarted.current){
            start()
            setStarted(false)
        }
        },[started])

      useEffect(() =>{
        if(isFMounted.current){
            const data = dataPizzas
            data.forEach(e => {
                const chance = Math.floor(Math.random() * 100)
                e.chance = chance
            })
            setAllPizza(data) 
        }
        isFMounted.current = false
    },[])
    useEffect(() =>{
        if(allPizza.length){
            generateItems()
        }
    },[allPizza])

  return (
  <ul ref={listRef} className={cl.pizzas}>
    { 
       genPiz.length && genPiz.map((e,index)=> <li key={index}><img src={e.url}/></li>)   
    }    
    </ul>
)};

export default NewItems;
//<li key={index}><img src={e.url}/></li>