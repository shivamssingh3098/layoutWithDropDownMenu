import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DataModel({ handelModal, show, onChange, submit }) {
  return (
    <>
      <Modal show={show} onHide={handelModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Chapter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex justify-content-around">
            <lable style={{ color: "black" }}>Add New Chapter</lable>
            <input type="text" name="newName" onChange={onChange} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handelModal}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Save Chapter
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default DataModel;
