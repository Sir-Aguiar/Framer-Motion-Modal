import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
type ModalProps = {
  handleClose: React.MouseEventHandler;
  text: string;
};
const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const Modal: React.FC<ModalProps> = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        drag
      > 
        {text}  
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
