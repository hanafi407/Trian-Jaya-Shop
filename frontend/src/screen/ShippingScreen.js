import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "./FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";


const ShippingScreen = ({ history }) => {
  const cart =useSelector(state=>state.cart)
  const {shippingAddress}=cart

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postCode, setPostCode] = useState(shippingAddress.postCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch=useDispatch()

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({address,city,postCode,country}))
    history.push('/payment')
  };
  return (
    <FormContainer>
    <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postCode'>
          <Form.Label>Post Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter post code'
            value={postCode}
            required
            onChange={(e) => setPostCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button className='mt-3' type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
