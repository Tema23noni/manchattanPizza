import React from "react";

import cl from '../../Pages/Menu/Menu.module.scss'
import Filter from "./Filter";
import Sort from "./Sort";
const ParamsToFil:React.FC = () => {
  return( 
  <div className={cl.Menu__sort}>
    <p className={cl.Menu__namePizza}>Пицца</p>
    <div className={cl.Menu__filters}>
      <div >
        <p>Фильтры</p>
        <Sort/>
      </div>
      <Filter/>
    </div>
    </div>
  );
};

export default ParamsToFil;
