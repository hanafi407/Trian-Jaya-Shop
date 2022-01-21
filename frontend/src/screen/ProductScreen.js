import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductsDetails } from "../actions/productActions";

const ProductScreen = () => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const productDetails = useSelector((state) => state.productDetails);

  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductsDetails(id));
  }, [dispatch]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant={error}></Message>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={6}>
            <Row>
              <Col md={12}>
                <ListGroup variant='flush'>
                  <ListGroup.Item className='mb-3'>
                    <h3>{product.name}</h3>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                  </ListGroup.Item>

                  <ListGroup.Item>Price: Rp{product.price}</ListGroup.Item>
                  <ListGroup.Item>
                    Description: {product.description}
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={6}>
                <Card>
                  <ListGroup variant='flush'>
                    <ListGroup.Item>
                      <Row>
                        <Col>Price</Col>
                        <Col>
                          <strong>Rp{product.price}</strong>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Status</Col>
                        <Col>
                          {product.countInStock > 0
                            ? "In Stock"
                            : "Out Of Stock"}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {/* {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )} */}
                    {product.countInStock > 0 && (
                      <ListGroup.Item>
                        <Row>
                        <Col>
                          Qty
                        </Col>
                          <Col>
                            <div class='form-group'>
                              <select
                                class='form-select'
                                id='exampleSelect1'
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )}
                    <ListGroup.Item variant='flush'>
                      <Row>
                        <Button
                          onClick={addToCartHandler}
                          className='btn-block'
                          type='button'
                          disabled={product.countInStock === 0}
                        >
                          Add To Cart
                        </Button>
                      </Row>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProductScreen;
