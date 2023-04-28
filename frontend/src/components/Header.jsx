import React, { useState } from 'react'
import {Navbar,Nav, Modal, Button, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalAmount } from '../features/cart/cartSlice';

const Header = () => {

    const [show, setShow] = useState(false);
    // get cart
    const { cart } = useSelector(state => state.cart);
    // get items from the localstoage
    let cartItems = JSON.parse(localStorage.getItem("cart"));
    const dispatch = useDispatch()
    const getTotalQuantity = cart.reduce((sum, product) => sum + product.quantity,0);
    
return (
    <>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>
                <Link to="/">
                <img style={{width:'70px'}} src="https://img.freepik.com/free-vector/fastfood-set-with-happy-face_1308-105905.jpg?w=2000" alt="" />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="nav-item" />
            <Navbar.Collapse id="nav-items">
                <Nav className="ms-auto">
                    <Nav.Link>
                        <Button onClick={() => setShow(true)}>Cart ({getTotalQuantity})</Button>
                    </Nav.Link>
                        <Modal show={show} onHide={()=>setShow(false)} style={{height:'600px',overflowY:'scroll'}}>
                        <Modal.Header closeButton>
                            Your Bag
                            </Modal.Header>
                        <Modal.Body>
                            {cart.length > 0  ? (
                                cart.map((item)=>{
                                    return(
                                    <>
                                        <Row key={item._id} className="shadow my-2 p-1">
                                            <Col lg={3} md={3} sm={3} xs={3}>
                                                <img style={{width:'100%'}} src={item.imageURL} alt="" />
                                            </Col>
                                            <Col lg={9} md={9} sm={9} xs={9}>
                                                <h4>Item:{item.name}</h4>
                                                <h4>Price:{item.price.$numberDecimal}</h4>
                                                    <h6 className="text-secondary">Quantity:{item.quantity}</h6>
                                            </Col>
                                        </Row>
                                    </>
                                    )
                                })
                                
                            ):
                                (<h4>Your bag is empty</h4>)}
                                < h3 className="text-success">
                                    SubTotal: {()=>dispatch(getTotalAmount())}
                                </h3>
                        </Modal.Body>
                        </Modal>
                    <Nav.Link>
                        <Link to="/add-product">
                            Add Item
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/view-product">
                            view Item
                        </Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </>

)
}
export default Header