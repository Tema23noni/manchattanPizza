import React, { useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import {BiRuble} from 'react-icons/bi'

import { Link, useLocation } from "react-router-dom";
import cl from './CartBtn.module.scss';
import { useSelector } from "react-redux";
import { cartSelector } from "../../Redux/Cart/selectors";
const CartBtn:React.FC = () => {
  const {totalPrice, items} = useSelector(cartSelector)
  const totalCount =  items.reduce((count:number, item) => count + item.count, 0)
  const isMounted = useRef(false);
  useEffect(() =>{
    if(isMounted.current){
      const json = JSON.stringify(items);
      localStorage.setItem('cart',json)
    }
    isMounted.current = true;
  },[items])

  const navigate = useLocation()
  if(navigate.pathname === '/cart'){
    return <div></div>;
  }
    return (  

    <Link to="cart" className={cl.CartBtn}>
      <div>
        <p>{totalPrice}</p>
        <BiRuble/>
      </div>
      <div>
        <FaShoppingCart/>
        <p className={cl.count}>{totalCount}</p>
      </div>
  </Link>
)};

export default CartBtn;
