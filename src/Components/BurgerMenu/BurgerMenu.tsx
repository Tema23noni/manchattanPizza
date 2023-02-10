import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartSelector } from "../../Redux/Cart/selectors";
import cl from './BurgerMenu.module.scss';

interface IProps {
  openModal: boolean,
  setOpenModal?:Dispatch<SetStateAction<boolean>>
}

const BurgerMenu:React.FC<IProps> = ({openModal,setOpenModal}) => {
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
  console.log(totalCount,totalPrice)
  return (
    <div className={openModal? [cl.MenuB,cl.active].join(' '):cl.MenuB} onClick={() => {setOpenModal && setOpenModal(!openModal)}} >
        <div className={cl.MenuB__cont} onClick={(e) => e.stopPropagation()}>
          <div className={cl.MenuB__s}>
            <div className={cl.MenuB__cart}>
              <h2>Manchattan pizza</h2>
              <p>Корзина: {totalCount? <span>{totalPrice} ₽, {totalCount} шт.</span>: "Пуста"}</p>
            </div>
            <nav className={cl.header__nav}>
                  <ul className={cl.header__nav__links}>
                  <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToHome} to="/">Главная</Link></li>
                  <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToMenu} to="menu">Меню</Link></li>
                  <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToCart} to="cart">Корзина</Link></li>
                  <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToAbout} to="aboutus">О нас</Link></li>
                  <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToContacts} to="contact">Контакты</Link></li>
                  </ul>
              </nav> 
          </div > 
        </div>
    </div>
  )
};

export default BurgerMenu;
