import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdb-react-ui-kit"; // Import MDB components
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function CartCard() {
  // const data = useLocation();
  // const product = data.state[0];
  // const user = data.state[1];
  // const quantity = 1;
  // console.log(product);
  // console.log(user);

  // const placeOrder = async () => {

  // }
  const [orderPlaced, setOrderPlaced] = useState(false);

  const notify = () => {
    toast.success('Order placed successfully!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setOrderPlaced(true);
  };

  return (
    <div>
      <CardContainer className="col-lg-6 col-md-6 m-lg-3 m-md-3 m-2 d-flex justify-content-center">
        <Card className="text-light">
          <MDBCardTitle className="mb-4"><strong>Order Summary</strong></MDBCardTitle>
          <div>
            <ul className="m-0 ps-0">
              <li className="d-flex justify-content-between">
                {/* <MDBCardText>₱{USformatter.format(product.Price)}</MDBCardText> */}
                <MDBCardText>Price</MDBCardText>
                <MDBCardText>$ 455.99</MDBCardText>
              </li>
            </ul>
          </div>
          <div className="d-flex justify-content-between">
            {/* <MDBCardText>{quantity}</MDBCardText> */}
            <MDBCardText>Quantity</MDBCardText>
            <MDBCardText>1</MDBCardText>
          </div>
          <div className="d-flex justify-content-between">
            <MDBCardText>Shipping</MDBCardText>
            <MDBCardText className="text-success">Free</MDBCardText>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            {/* <MDBCardText>₱{USformatter.format(product.Price * quantity)}</MDBCardText> */}
            <MDBCardText>TOTAL</MDBCardText>
            <MDBCardText>$ 455.99</MDBCardText>
          </div>
          {/* <button type="submit" onClick={placeOrder}></button> */}
          {/* <MDBBtn color="light" className="w-100 p-3" onClick={notify}>PLACE ORDER</MDBBtn> */}
          <ToastContainer />
          <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
          <MDBBtn
            color="light"
            className="w-100 p-3"
            onClick={notify}
            disabled={orderPlaced} // Disable the button once the order is placed
          >
            PLACE ORDER
          </MDBBtn>
        </Card>
      </CardContainer>
    </div>
  );
}

export default CartCard;

const Card = styled(MDBCardBody)`
  background: #1F2937;
  border-top: 5px solid #DC2626;
  border-radius: 15px;
`;

const CardContainer = styled(MDBCard)`
  min-width: 350px;
`;