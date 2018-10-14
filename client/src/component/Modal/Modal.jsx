import React, { Component } from "react";
import Favorite from "../Favorite";
import "./modal.css";

const Modal = ({ children, closeModal, modalState, title }) => {
  if (!modalState) {
    return null;
  }
  //   Modal.propTypes = {
  //     closeModal: React.PropTypes.func.isRequired,
  //     modalState: React.PropTypes.bool.isRequired,
  //     title: React.PropTypes.string
  //   };

  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body details">
          <div className="content">{children}</div>
        </section>
        <footer className="modal-card-foot foot">
          <a className="button" onClick={closeModal}>
            Close Trip Details
          </a>

          <Favorite />
        </footer>
      </div>
    </div>
  );
};

export default Modal;
