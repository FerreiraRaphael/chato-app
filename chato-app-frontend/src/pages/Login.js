import React, { useContext, useState } from "react";
import { Col, Container, Form, Row, Button, Spinner } from "react-bootstrap";
import {Link} from "react-router-dom";
import "./Login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    function handleLogin(e) {
        e.preventDefault();

    }

    return(
    <Container>
        <Row>
            <Col md={5} className="login__bg"></Col>    
            <Col md={7} className="d-flex align-items-center justify-content-center flex-direction-column">    
                <Form style ={{width: "80%", maxWidth: 500}} onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail"/>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} required/>
                        </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <div className="py-4">
                        <p className="text-center">
                            Don't have an account ? <Link to="/signup">Signup</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Row>
    </Container>
    );
}

export default Login;