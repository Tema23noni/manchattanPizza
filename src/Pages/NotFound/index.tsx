import React from "react";
import cl from './NotFound.module.scss'
const NotFound:React.FC = () => {
  return (
  <div className={cl.NotFound}>
    <div>
      <h1>Извините, но мы не можем найти эту страницу</h1>
      <p>🥺</p>
    </div>
  </div>
  );
};

export default NotFound;
