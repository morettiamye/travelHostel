import React from "react";

class Modal extends React.Component {
  state = {};

  render() {
    return (
      <div class="modal">
        <div class="modal-background" />
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Trip Details</p>
            <button class="delete" aria-label="close">
              X
            </button>
          </header>
          <section class="modal-card-body">
            <p />
            <p />
            <p />
            <p />
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Save changes</button>
            <button class="button">Cancel</button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
