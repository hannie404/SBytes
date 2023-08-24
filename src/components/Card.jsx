import React from "react";
import { Styled } from "styled-components";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import cardData from "./CardData";

export function CardList() {
  return (
    <div>
      <h3 className="text-center m-3">Solutions for Business of any Size</h3>
      <p className="text-center m-3">
        SBytes for Business provides the technology solutions that businesses
        both large and small need to thrive. Our collection of easy-to-use and
        easy-to-manage business laptops, desktops, and workstation computers are
        designed to meet the demands of any workplace and take your business to
        the next level.
      </p>
      {cardData.map((card) => (
        <MDBCard key={card.id}>
          <MDBCardImage
            src={card.imageUrl}
            alt={`Card ${card.id}`}
            className=""
          />
          <MDBCardBody>
            <MDBCardTitle className="mb-3">{card.title}</MDBCardTitle>
            <MDBCardText className="mb-3">{card.content}</MDBCardText>
            <MDBBtn color="danger" href={card.link}>
              Learn More
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

export default CardList;
