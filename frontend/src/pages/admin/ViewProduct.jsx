import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Pagination, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { findSingleItem, getItems,resetState, singleItem } from '../../features/items/itemSlice';
import Loading from '../../components/Loading';
import { addToCart } from '../../features/cart/cartSlice';
const ViewProduct = () => {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(1);
    // get the states
    const { items, isLoading, isError, isSuccess, message } = useSelector(state => state.items);
    // initialize useDispatch to dispatch the get function
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            toast(message);
        } 
        dispatch(getItems())
        
        return()=>{
            dispatch(resetState());
        }
    }, [isError,message,dispatch]);
    if (isLoading) {
        <Loading/>
    }
    let itemPerPage = 10;
    let lastItem = page * 10;
    let firstItem = lastItem - itemPerPage;
return (
    <>
        <Container>
            <Row className="justify-content-center align-items-center text-center cont" style={{gap:'1rem'}}>
                {items.length > 0 ? (
                    items.slice(firstItem,lastItem).map((item) => {
                        return(
                            <>
                                <Col lg={3} md={4} sm={6} xs={12} className="shadow card" >
                                    <img style={{width:'200px',margin:'auto'}} src={item.imageURL} alt="" />
                                    <h4>Product:{item.name}</h4>
                                    <h6>Price:{item.price.$numberDecimal}</h6>
                                    <Link to="single-item">
                                        <Button className="w-100 my-2" onClick={()=>dispatch(findSingleItem(item._id))}>View Item</Button>
                                    </Link>
                                        <Button className="w-100 my-2" onClick={()=>dispatch(addToCart(item))}>Add To Cart</Button>
                                        
                                </Col>
                            </>
                        )
                    })
                ) : (
                        <Loading/>
                )
            }
            </Row>
            <Pagination >
                <Pagination.First className="ms-auto me-1" onClick={()=>setPage(page-1)} />
                <Pagination.Last
                    onClick={() => setPage(page + 1)}
                />
            </Pagination>
        </Container>
    </>
)
}

export default ViewProduct
