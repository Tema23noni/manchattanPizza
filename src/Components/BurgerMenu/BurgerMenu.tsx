import React, { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import cl from './BurgerMenu.module.scss';

interface IProps {
  openModal: boolean,
  setOpenModal?:Dispatch<SetStateAction<boolean>>
}

const BurgerMenu:React.FC<IProps> = ({openModal,setOpenModal}) => {
  console.log(openModal)
  return (
    <div className={openModal? [cl.MenuB,cl.active].join(' '):cl.MenuB} onClick={() => {setOpenModal && setOpenModal(!openModal)}} >
        <div className={cl.MenuB__cont} onClick={(e) => e.stopPropagation()}>
          <nav className={cl.header__nav}>
                <ul className={cl.header__nav__links}>
                <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToHome} to="/">Главная</Link></li>
                <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToMenu} to="menu">Меню</Link></li>
                <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToCart} to="cart">Корзина</Link></li>
                <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToAbout} to="aboutus">О нас</Link></li>
                <li onClick={() => setOpenModal && setOpenModal(false)} className={cl.links}><Link className={cl.linksToContacts} to="contact">Контакты</Link></li>
                </ul>
            </nav>  
        </div>
    </div>
  )
};

export default BurgerMenu;
