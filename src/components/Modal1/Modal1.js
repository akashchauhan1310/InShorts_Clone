import React from 'react';
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Modal1.css';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';

function Modal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <Button variant="outline-danger" onClick={handleShow} className="btn-contact">
        Weekly Magazine
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title><span className="modal-text">Get your Weekly Magazine !</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <InputGroup>
                <InputGroup.Prepend>
                   <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                      <Form.Control type="text" placeholder="Username" />
              </InputGroup>
                                <br/>
            <InputGroup>
                <Form.Control type="email" placeholder="Enter email" />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">@gmail.com</InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label><span className="inside-text">{" "}Got queries ??</span></Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Enter queries" />
            </Form.Group>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose} className="btn1">
            Close
            </Button>
          <Button variant="outline-danger" onClick={handleClose} className="btn2">
            Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modal1;