import React from 'react';
import { render } from "react-dom";
import { useState, useEffect} from 'react';
import Modal from "./lib/Modal";
const App = () => {
  
  const [openModal, setOpenModal] = useState(false);
  useEffect(() => {
    setOpenModal(true);
  }, [])
  
  return(
  <div style={{ width: 640, margin: "15px auto" }}>
    {openModal && (
      <Modal closeModal={() => setOpenModal(false)}>
        <p>Employee Created!</p>
      </Modal>
    )}
  </div>
);
}
render(<App />, document.getElementById("root"));