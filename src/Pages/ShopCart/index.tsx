import React from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../../Components/CartItem";
import EmptyCart from "../../Components/EmptyCart";
import cl from './ShopCart.module.scss'
import { cartSelector } from "../../Redux/Cart/selectors";
import { clearItems } from "../../Redux/Cart/slice";

const ShopCart:React.FC = () => {
  const dispatch = useDispatch();
  const {items, totalPrice} = useSelector(cartSelector)
  const totalItems:number = items.reduce((count:number, item) => count + item.count,0)
  
  if(!totalPrice){
    return (<EmptyCart/>)
  } 
  
  return (
      <div className={cl.ShopCard}>
        <div className={cl.cont}>
          <div className={cl.content}>
              <div className={cl.head}>
                <div className={cl.title}>
                  <FaShoppingCart/> 
                  <p>Корзина</p> 
                </div>
                <div className={cl.clear} onClick={() => dispatch(clearItems()) }>
                  <BsFillTrashFill/>
                  <p>Очистить корзину</p>
                </div>
              </div>
            <div className={cl.root}>
  
              <div className={cl.ShopCartItems}>
                {
                  items.map((e) =>  <CartItem key={e.id} {...e}/> )
                }
              </div>
             
            </div>
            <div className={cl.footer}>
              <div className={cl.totalPizza}>
                  <div>Всего пицц: <span>{totalItems} шт.</span></div>
                  <div>Сумма заказа: <span>{totalPrice} руб</span></div>
                </div>
                <div className={cl.btn}>
                  <Link to='/menu'>Вернуться назад</Link>
                  <a href="#">Отправить сейчас</a>
                </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ShopCart;
