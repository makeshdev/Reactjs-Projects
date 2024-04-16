import React, { useState } from "react";

export const CommendInput = ({ commendClick, buttonref }) => {
  const [inputId, setInputId] = useState("");

  const changeFun = (e) => {
    setInputId(e.target.value);
  };

  return (
    <>
      <div
        className="card-footer py-3 border-0 mt-5 w-50 mx-auto"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <h2 className="mb-3 text-primary">Commend...</h2>
        <div className="d-flex flex-start">
          <img
            className="rounded-circle shadow-1-strong me-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
            alt="avatar"
            width="40"
            height="40"
          />
          <div data-mdb-input-init className="form-outline w-100">
            <label className="form-label" for="textAreaExample">
              Message
            </label>
            <textarea
              className="form-control"
              placeholder="Commend Here..."
              rows="4"
              style={{ background: "#fff", border: "1px solid #999" }}
              value={inputId}
              onChange={changeFun}
            ></textarea>
          </div>
        </div>
        <div className="float-end mt-2 pt-1">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => {
              commendClick(inputId);
              setInputId("");
            }}
            ref={buttonref}
          >
            Post comment
          </button>
          {/* <button type="button" className="btn btn-outline-primary btn-sm">
            Cancel
          </button> */}
        </div>
      </div>
    </>
  );
};
