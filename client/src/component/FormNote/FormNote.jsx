import React from "react";

const FormNote = () => (
  <div class="field">
    <label class="label">Share Your Adventure Here!</label>
    <div class="control m-5">
      <textarea
        class="textarea"
        placeholder="Tell Everyone About Your Incredible Adventure Here!"
        rows="10"
        cols="75"
      />
    </div>
  </div>
);

export default FormNote;
