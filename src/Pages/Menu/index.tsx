import React from "react";

import cl from './Menu.module.scss';
import Filter from "../../Components/ParamsToFil/ParamsToFil";
import Search from "../../Components/Search";
import Pagination from "../../Components/Pagination";
import Carts from "../../Components/Carts/Carts";

const Menu:React.FC = () => {
  return (
    <div className={cl.Menu}>
            <div className='cont'>
                <h2>Меню</h2>
                <Filter/>
                <Search/>
                <Carts/>
                <Pagination/>
            </div>
    </div>
    );
};

export default Menu;
