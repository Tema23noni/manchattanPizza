import React from "react";
import {  GeolocationControl, Map, Placemark, YMaps } from "react-yandex-maps";
import {GiDeliveryDrone} from 'react-icons/gi'
import {AiOutlineFieldTime} from 'react-icons/ai'
import {CgSmartHomeCooker} from 'react-icons/cg'
import {BsCashStack} from 'react-icons/bs'
import cl from './Contacts.module.scss'
const Contacts:React.FC = () => {
  return (
  <div className={cl.root}>
    <div className="cont">
        <h2>Контакты</h2>
        <div className={cl.content}>
                <div>
                    <AiOutlineFieldTime/>
                    <h3>Режим работы <span>10:00 - 22:00</span></h3>
                </div>
                <div> 
                   <CgSmartHomeCooker/>
                    <h3>Наш адрес: <a href="https://yandex.ru/maps/213/moscow/?ll=37.639823%2C55.705042&mode=search&sll=37.640803%2C55.704634&text=55.704634%2C37.640803&z=16.31">Автозаводская улица, 18</a></h3>
                </div>
                <div>
                    <BsCashStack/>
                    <h3>Способы оплаты курьеру: Картой</h3>
                </div>
                <div>
                    <GiDeliveryDrone/>
                    <h3>Бесплатная доставка от 699руб.</h3>                    
                </div>
        </div>
    </div>
    <div className={cl.Ymap}>
        <YMaps>
            <div className={cl.map}>
                <Map 
                    className={cl.map} 
                    defaultState={{center: [55.704634, 37.640803], zoom:16}}
                >
                    <GeolocationControl/>
                    <Placemark geometry={[55.704634, 37.640803]}/>       
                </Map>
            </div>
        </YMaps>
    </div>
  </div>)
};

export default Contacts;
