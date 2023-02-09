import React from "react";
import { Link } from "react-router-dom";
import BurgerBtn from "../BurgerMenu/BurgerBtn";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import cl from './Header.module.scss'


const Header: React.FC = () => {
  const [openModal, setOpenModal] = React.useState<boolean>(false)
  return(
    <>
    <header className={cl.header}>
        <div className="cont">
          <div className={cl.header__cont}>
            <Link to="/"><div className={cl.header__logo}>Manhattan Pizza</div></Link>
            <span></span>
            <nav className={cl.header__nav}>
                <ul className={cl.header__nav__links}>
                <li className={cl.links}><Link className={cl.linksToHome} to="/">Главная</Link></li>
                <li className={cl.links}><Link className={cl.linksToMenu} to="menu">Меню</Link></li>
                <li className={cl.links}><Link className={cl.linksToCart} to="cart">Корзина</Link></li>
                <li className={cl.links}><Link className={cl.linksToAbout} to="aboutus">О нас</Link></li>
                <li className={cl.links}><Link className={cl.linksToContacts} to="contact">Контакты</Link></li>
                </ul>
            </nav>  
          </div>
        </div>        
    </header>
    <BurgerBtn setOpenModal={setOpenModal} openModal={openModal}/>
    <div className={openModal? [cl.header__burger,cl.active].join(' '):cl.header__burger}>

      <BurgerMenu setOpenModal={setOpenModal} openModal={openModal}/>
    </div>
    </>
  )
};

export default Header;
