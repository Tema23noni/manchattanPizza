import React from "react";
import { RiDeleteBack2Fill } from "react-icons/ri";
import { addItems, minusItems, removeItem } from "../../Redux/Cart/slice";
import { useAppDispatch } from "../../Redux/store";
import cl from './CartItem.module.scss'

type CartItemProps = {
  id: string;
  title: string;
  url: string;
  size: number;
  type: string;
  count:number;
  price: number;
}

const CartItem:React.FC<CartItemProps> = ({id, price, size, title, type, url,count}) => {
  const dispatch = useAppDispatch();
  return (
  <div className={cl.ShopCartItem}>
    <div className={cl.aboutPizza}>
        <img src={url} alt="" />
        <div className={cl.params}>
            <h2>{title}</h2>
            <p>{type}, {size}см</p>
        </div>
    </div>
    <div className={cl.contParam}>
      <div className={cl.countPizza}>
          <span onClick={() => dispatch(minusItems(id))}>-</span>
          <p>{count}</p>
          <span onClick={() => dispatch(addItems({id, size,type} as CartItemProps))}>+</span>
      </div>
      <div className={cl.pricePizza}>
          <p>{price}руб.</p>
          <RiDeleteBack2Fill onClick={() => dispatch(removeItem(id))}/>
      </div>
    </div>
  </div>
  );
};

export default CartItem;
