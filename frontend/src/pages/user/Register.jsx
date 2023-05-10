import React from 'react'
import { Container,Form } from 'react-bootstrap';
const Register = () => {
return (
    <>
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Please enter your name..."/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Please enter your email..."/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="text" placeholder="Your password..."/>
                </Form.Group>
            </Form>
        </Container>
    </>
)
}
export default Register