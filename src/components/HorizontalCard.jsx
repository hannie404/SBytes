import React from "react";
import { styled } from "styled-components";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import horCardData from "./HCardData";

const Text1 = styled.div`
  text-align: center;
  margin: 2rem auto;
  max-width: 960px;
  padding-bottom: 50px;
  font-size: 1.2rem;
`;

const Title = styled.h2`
  font-weight: 700;
`;

export function HorizontalCardList() {
  return (
    <div>
      {horCardData.map((card) => (
        <div className="m-5 ">
          <MDBCard key={card.id}>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src={card.imageUrl}
                  alt={`Card ${card.id}`}
                  className="img-fluid"
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCardBody className="mt-5">
                  <MDBCardTitle className="mt-5">
                    {" "}
                    <Title>{card.title}</Title>
                  </MDBCardTitle>
                  <MDBCardText className="mt-3">{card.content}</MDBCardText>
                  <MDBBtn className="bg-danger mt-2" href={card.link}>
                    Learn More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      ))}
      {/*  */}
      <Text1>
        <h3 className="text-center m-3">Find a Reseller</h3>
        <p className="text-center m-3">
          No matter where you are in the world, SBytes for Business has the
          device you need. Our global network ensures that you can find our
          products and access our support services at a moment’s notice.
        </p>
      </Text1>
      <MDBRow className="row-cols-1 row-cols-md-4 m-4 justify-content-md-center mb-5">
        <MDBCol>
          <MDBCard className="w-75">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/where-to-buy?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">Where to Buy?</MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-75">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/request-a-quote?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Request a Quote
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="w-75">
            <MDBCardImage
              src="https://images.acer.com/is/image/acer/channel-partners?$Icon-L$"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle className="text-center">
                Channel Partners
              </MDBCardTitle>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default HorizontalCardList;
