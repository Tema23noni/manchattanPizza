import React, { useEffect } from "react";
import { useState } from "react";
import cl from './Slider.module.scss'

import pizza1 from '../../img/PizzaToSlider/pizzamain.png';
import pizza2 from '../../img/PizzaToSlider/pizza2.png';
import pizza3 from '../../img/PizzaToSlider/pizza3.png';
import pizza4 from '../../img/PizzaToSlider/pizza4.png';
import pizza5 from '../../img/PizzaToSlider/pizza5.png';
import png from '../../img/pizza.png'

const urlPizza= [
    {url: pizza1},
    {url:pizza2},
    {url:pizza3},
    {url:pizza4},
    {url:pizza5},
    {url: png}
]

const Slider:React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const nextSlide = ():void => {
        const isLast:boolean = currentIndex === urlPizza.length-1;
        const newIndex: number = isLast ? 0 : currentIndex +1;
        setCurrentIndex(newIndex)
    };
    useEffect(() =>{
        const time: NodeJS.Timer = setInterval(() =>{
            nextSlide()
        },5000)
        return () => clearInterval(time)
    },[currentIndex])

  return( 
    <div className={cl.Slider} >
        <div onClick={nextSlide} style={{backgroundImage: `url(${urlPizza[currentIndex]?.url})`}}/>
    </div>
    )
};

export default Slider;
