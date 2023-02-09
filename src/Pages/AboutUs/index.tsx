import React from "react";
import {FaReact} from 'react-icons/fa'
import {SiRedux, SiTypescript,SiTailwindcss} from 'react-icons/si'
import cl from './AboutUs.module.scss'
const AboutUs:React.FC = () => {
  return (
    <div className={cl.root}>
        <div className="cont">
            <div className={cl.title}>
                <h2>О нас</h2>
                <div className={cl.content}>
                    <div className={cl.mission}>
                        <h3>Миссия Manhattan pizza</h3>
                        <p>Manhattan pizza существует как коммерческая организация гостеприимства, которая выступает за единство, развитие и справедливость для наших гостей, нашей команды и наших сообществ, чтобы возглавить работу по созданию положительного и долгосрочного воздействия. </p>
                    </div>
                    <div className={cl.write}>
                        <h3>На чём написан этот сайт</h3>
                        <ul>
                            <li><FaReact/>React</li>
                            <li><SiRedux/>Redux</li>
                            <li>mockAPI</li>
                            <li><SiTypescript/>Typescript</li>
                            <li><SiTailwindcss/>Tailwindcss</li>
                        </ul>
                    </div>
                </div>    
                <div className={cl.img}><div></div></div>
            </div>
        </div>
    </div>
)};

export default AboutUs;
