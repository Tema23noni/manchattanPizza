import React from "react";
import { Link } from "react-router-dom";
import cl from './Footer.module.scss'
const Footer:React.FC = () => {
    const copied = (e:React.MouseEvent) =>{
        const input = e.target as HTMLElement;
        navigator.clipboard.writeText(input.innerText);
        alert('Текст скопирован')
    }
  return (
    <div className={cl.root}>
        <div className={cl.line}></div>
        <div className='cont'>
            <div className={cl.content}>
                <div className={cl.contact}>
                    <div className={cl.number}>
                        <h2>Наш телефон</h2>
                        <a href="tel:+7(888)-999-22-11">+7(888)-999-22-11</a>
                    </div>
                    <div className={cl.adress}>
                        <h2>Наш адрес</h2>
                        <p onClick={copied}>г.Москва ул. Крапотня д.23</p>
                    </div>
                    <div className={cl.mail}>
                        <h2>Наш электронный адрес</h2>
                        <p onClick={copied}>artempomortsev11@gmail.com</p>
                    </div>
                </div>
                {

                }
                <div className={cl.logo}>
                    <Link to='/'>Manhattan pizza</Link>
                </div>
            </div>
        </div>
    </div>
)};

export default Footer;
