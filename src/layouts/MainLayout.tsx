import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import CartBtn from "../Components/CartBtn";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

type TCord = {
  startX: number;
  endX: number;
  startY: number;
  endY: number;
}

const MainLayout:React.FC = () => {  
  
  const boxRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isClicked = useRef<boolean>(false);
  
  const coords = useRef<TCord>({
    startX: 0,
    endX: 0,
    startY: 400,
    endY: 400,
  })

  useEffect(() =>{
    if(!boxRef.current || !containerRef.current) return;

    const box = boxRef.current;
    const container = containerRef.current

    const onMouseDown = (e:MouseEvent) =>{
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
    };
    const onMouseUp = () =>{
      isClicked.current = false;
      coords.current.endX = box.offsetLeft;
      coords.current.endY = box.offsetTop;
    };
    const onMouseMove = (e:MouseEvent) =>{
      if(!isClicked.current) return;
      console.log()
      const nextX = e.clientX - coords.current.startX + coords.current.endX;
      const nextY = e.clientY - coords.current.startY + coords.current.endY;

      box.style.top = `${nextY}px`;
      box.style.left = `${nextX}px`;
    }
    box.addEventListener('mousedown', onMouseDown);
    box.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('click', onMouseUp);
    container.addEventListener('mouseup', onMouseUp);
    container.removeEventListener('mouseleave', onMouseUp);

    const cleanup = () =>{
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('click', onMouseUp);
      container.removeEventListener('mouseleave', onMouseUp);
      container.addEventListener('mouseup', onMouseUp);
      box.removeEventListener('mousedown', onMouseDown);
      box.removeEventListener('mouseup', onMouseUp);
    }
    return cleanup
  }, [])

  return (
  <div ref={containerRef} className="App">
    <div className="content">
   <Header/> 
   <div className="container" ref={boxRef}>
    <CartBtn />
   </div>
   
    <Outlet/>
   <Footer/>
   </div>
  </div>)
};

export default MainLayout;
