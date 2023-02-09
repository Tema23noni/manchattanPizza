import React, { Dispatch, SetStateAction } from "react";
import cl from './BurgerMenu.module.scss'

interface IProps {
    openModal: boolean,
    setOpenModal?:Dispatch<SetStateAction<boolean>>
  }
const BurgerBtn:React.FC<IProps> = ({openModal,setOpenModal}) => {
    return (
        <div className={cl.MenuB__open} onClick={() => setOpenModal && setOpenModal(!openModal)}>
            <div className={openModal ? [cl.Open__Modal, cl.active].join(' '): cl.Open__Modal}>
                <span></span>
            </div>
        </div>
      )

};

export default BurgerBtn;
