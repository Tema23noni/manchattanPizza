import React from "react";
import cl from './Preloader.module.scss'
const Preloader:React.FC = () => {
  return (
  <div className={cl.root}>
    <h2>MANHATTAN PIZZA</h2>
    <div className={cl.content}>
        <div className={cl.balls}>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>
  </div>
)};

export default Preloader;
