import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { findSingleItem, resetState } from '../../features/items/itemSlice';
import Loading from '../../components/Loading';
import { Col, Row } from 'react-bootstrap';
const SingleItem = () => {
    const { items, isLoading, isSuccess, isError, message } = useSelector(state => state.items);
    const dispatch = useDispatch();
    useEffect(() => {
        if (isError) {
            toast(message)
        }
        return () => {
            dispatch(resetState())
        }
    },[isError,items,message,dispatch])
    if (isLoading) {
        <Loading/>
    }
return (
    <>
        <Row>
        {items.length > 0 ? (items.map((item) => {
            return(
                <>
                    <Col lg={3}>
                        <img style={{width:'100%'}} src={item.imageURL} alt="" />
                    </Col>
                    <Col lg={6}>
                        <h4>{item.name}</h4>
                        <h6>Price:{item.price.$numberDecimal}</h6>
                    </Col>
                </>
                )
        })) :(
            <>
                <h4>no items</h4>
            </>
        )
            
            }
        </Row>
    </>
)
}
export default SingleItem