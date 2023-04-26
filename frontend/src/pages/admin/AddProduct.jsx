import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {toast} from 'react-toastify'
import '../../css/addProduct.css';
import { postItems, resetState } from '../../features/items/itemSlice'
import Loading from '../../components/Loading'
import { BarWave } from 'react-cssfx-loading'
const AddProduct = () => {
    // initialize useSelector to dispatch the actions
    const dispatch = useDispatch()
    // handle the state value coming from the store
    const { items, isLoading, isSuccess, isError, message } = useSelector(state => state.items);
    const [formFields, setFormFields] = useState({
        name:'',price:'',info:''
    });
    // handle the sideEffects
        useEffect(()=>{
            if (isError) {
                toast(message);
            }
            if (isSuccess) {
                toast('data inserted successfully');
                setFormFields({...formFields,name:'',price:'',info:''});
                setImage(null);
                setImagePreview(null);
            }
            dispatch(resetState())
        },[isError,isSuccess,items,message,formFields,dispatch])
    // destructure the fields
    const { name, price, info } = formFields;
    const [image,setImage] = useState(null);
    const [imagePreview,setImagePreview] = useState(null);
    const [uploading,setUploading] = useState(false);
    // validate the image
    const validateImage = (e) => {
        const file = e.target.files[0];
        if(file > 10246923){
            alert('file size too bid')
        }
        setImagePreview(URL.createObjectURL(file));
        setImage(file);
        
    }

    // handle the image upload
    const uploadImage = async () => {
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'vgvxg0kj');
        try {
            setUploading(true);
            let response = await fetch('https://api.cloudinary.com/v1_1/djo5zsnlq/image/upload', {
                method: 'post',
                body: data,
            });
            setUploading(false);
            return response.url;
        } catch (error) {
            console.log(error)
        }
    }
    // handle the submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        // upload to cloudinary
        const imageURL = await uploadImage(image);
        // data to be sent to the backend
        const itemData = {
            name,price,info,imageURL
        };
            dispatch(postItems(itemData));
    }
    
    // handle state value
    const handleChange = (e) => {
        setFormFields((prevVal) => ({
            ...prevVal,
            [e.target.name] : e.target.value
        }))
    }

    // show loading when inserting data
    if(isLoading){
        return <Loading/>
    }
    
return (
    <>
        <Container>
            <Row className="justify-content-center align-items-center">
                <Col lg={6}>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Product Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Please enter the item name'
                                name="name"
                                value={name}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Product Price
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Please enter the item name'
                                name="price"
                                value={price}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Product Info
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder='Please enter the item name'
                                name="info"
                                value={info}
                                onChange={handleChange}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Product Image
                            </Form.Label>
                            <Form.Control type="file" onChange={validateImage} />
                            <div className="image-preview border border-secondary mt-3 rounded" >
                                <h6 className="text-secondary text-center text-capitalize">
                                    image preview
                                </h6>
                                <img style={{
                                    width: '100%'
                                    , margin: 'auto',
                                    height: '250px',
                                    objectFit:'contain'
                                }} src={image ? imagePreview : 'https://cdn-icons-png.flaticon.com/512/1377/1377194.png'} alt="" />
                            </div>
                        </Form.Group>
                        {uploading ? <BarWave color="green" classname="my-5" style={{display:'flex',margin:'1rem auto'}} /> : <Button
                            onClick={handleSubmit}
                            variant="success"
                            className="w-100 my-2"
                        >Add Item</Button>}
                    </Form>
                </Col>
                <Col lg={6}>
                    <img style={{
                        height:'600px',
                        width:'100%',
                        objectFit:'cover'
                    }} src="https://img.freepik.com/free-vector/vintage-restaurant-menu_23-2147491098.jpg?w=740&t=st=1682422237~exp=1682422837~hmac=2d6ed35bda5f9a0a651fbd087af528503aadaa41549eb9294c493038ad630533" alt="" />
                </Col>
            </Row>
        </Container>
    </>
)
}

export default AddProduct
