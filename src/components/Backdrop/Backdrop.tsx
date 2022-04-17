import React, { MouseEventHandler } from "react";
import { motion } from "framer-motion";
type BackdropProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  children: React.ReactElement;
};
const Backdrop: React.FC<BackdropProps> = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
