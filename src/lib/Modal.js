import React from 'react';
import xmark from './xmark.svg'
import "./modal.css";
const Modal = ( props ) => {
  const { closeModal } = props;
  
  return (
    <div className="overlay">
      <div className="content">
      <span name="times" onClick={closeModal} aria-label="close icon" className='icon'>
        <img src={xmark} alt=""/></span>
        <p>{props.str}</p>
      </div>
    </div>
  );
};

export default Modal;