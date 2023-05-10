import React from 'react'
import {Button, Col, Container, Form, FormSelect, Row} from 'react-bootstrap'
const Table = () => {
return (
    <>
        <Container>
            <Row>
                <Col lg={6}>
                    <img style={{width:'100%'}} src="https://media.istockphoto.com/id/1296129282/vector/online-restaurant-table-reservation-flat-isometric-illustration.jpg?s=612x612&w=0&k=20&c=r25EEAS4OhbeC7j0xSmY0Mh-q7wB9HY8AT9ArlNC0ME=" alt="" />
                </Col>
                <Col lg={6}>
                    <Form className="align-item-center justify-content-center d-flex flex-column">
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder='Name...'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type='date'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type='time'/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Table</Form.Label>
                            <Form.Select>
                                <option>test</option>
                            </Form.Select>
                        </Form.Group>
                        <Button variant="success" className="my-2 w-100">
                            Reserve Table
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>
)
}

export default Table
