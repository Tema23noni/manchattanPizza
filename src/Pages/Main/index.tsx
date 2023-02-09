import React from "react";
import { Link } from "react-router-dom";
import Slider from "../../Components/Slider";

import cl from './Main.module.scss'

const Main:React.FC = () => {
    const [flag, setFlag] = React.useState<boolean>(false);
    const [flag2, setFlag2] = React.useState<boolean>(false)
  return (
        <div className={cl.MainPage}>
            <div className='cont'>          
                <main className={cl.root}>
                    <div className={cl.content}>
                        <div className={cl.textContent}>
                            <p className={cl.text}>Ощути настоящий вкус</p>
                            <h2>Pi<span className={cl.sToH} onClick={() => setFlag(!flag)}>{flag? '3.14159': 'zzzzzz'}</span>a<span className={cl.sToH} onClick={() => setFlag2(!flag2)}>{flag2? '?': '!'}</span></h2>
                            <p className={cl.pick}>Участвуй в нашей фортуне и выиграй бесплатную пиццу</p>
                        </div>
                        <div className={cl.btn}>
                            <Link className={cl.contest} to='freepizza'>Получить пиццу</Link>
                            <Link className={cl.menu} to='menu'>Заказать сейчас</Link>
                        </div>
                    </div>
                    <div className={cl.Slider}>
                        <Slider/>
                    </div>
                </main>
            </div>
        </div>
    )
};

export default Main;
