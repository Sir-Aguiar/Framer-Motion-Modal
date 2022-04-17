import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <div>
      <motion.button
        className="save-button"
        onClick={() => (modalOpen ? close() : open())}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Launch Modal
      </motion.button>
      {modalOpen && <Modal handleClose={close} text="Hello Modal"/>}
    </div>
  );
};

export default App;

