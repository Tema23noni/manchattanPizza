import React from "react";
import cl from './EmptyCart.module.scss'
import img from '../../img/chief.png'
import { Link } from "react-router-dom";
const EmptyCart:React.FC = () => {
  return (
  <div className={cl.root}>
    <div>
      <h2>Корзина пуста </h2>
      <p>Пора бы что-нибудь взять<span>🤔</span></p>
    </div>
    <img src={img}/>
    <Link to="/menu">Вернуться назад</Link>
  </div>  
)};

export default EmptyCart;
