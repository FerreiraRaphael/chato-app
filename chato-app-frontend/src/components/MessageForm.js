import React from 'react'
import { Button, Col, Form, Row } from "react-bootstrap";
import './MessageForm.css'
function MessageForm() {
    function handleSubmit(e) {
        e.preventDefult();
    }
  return (
    <>
    <div className='messages-output'> </div>
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col md={11}>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Your message"></Form.Control>
                    </Form.Group>
                </Col>
                <Col md={1}>
                    <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "orange"}}>
                        <i className='fas fa-paper-plane'></i>
                    </Button>
                </Col>
            </Row>
        </Form>
    </>
  )
}

export default MessageForm