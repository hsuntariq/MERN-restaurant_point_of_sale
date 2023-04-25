import React from 'react'
import {Navbar,Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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