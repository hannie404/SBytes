import React from "react";
import { styled } from "styled-components";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
} from "mdb-react-ui-kit";
import BusinessData from "./BusinessData";

export function BusinessDataList() {
  return (
    <div>
      <Text1>
        <h3 className="text-center m-3">
          <Title>Solutions for Business of any Size</Title>
        </h3>
        <p className="text-center m-3">
          SBytes for Business provides the technology solutions that businesses
          both large and small need to thrive. Our collection of easy-to-use and
          easy-to-manage business laptops, desktops, and workstation computers
          are designed to meet the demands of any workplace and take your
          business to the next level.
        </p>
      </Text1>
      <CardBody className="d-md-flex row justify-content-md-center">
        {BusinessData.map((card) => (
          <div className="col-12 col-sm-6 col-md-3 p-4">
            <MDBCards>
              <MDBCard className="h-100" key={card.id}>
                <MDBCardImage
                  src={card.imageUrl}
                  alt={`Card ${card.id}`}
                  className=""
                />
                <MDBCardBody>
                  <MDBCardTitle className="mb-3">
                    {" "}
                    <Title>{card.title}</Title>
                  </MDBCardTitle>
                  <MDBCardText className="mb-3">{card.content}</MDBCardText>
                  <MDBBtn
                    className="bg-danger mt-2 position-absolute bottom-0 start-0 translate-left m-3"
                    href={card.link}
                  >
                    Learn More
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCards>
          </div>
        ))}
      </CardBody>
    </div>
  );
}

export default BusinessDataList;

const CardBody = styled.div`
  flex-wrap: wrap;
  margin-right: 50px;
  margin-left: 50px;
`;

const MDBCards = styled(MDBCard)`
  margin: 0px;
  height: 105%;
`;

const Title = styled.div`
  font-weight: 700;
  color: black;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text1 = styled.div`
  text-align: center;
  margin: 2rem auto;
  max-width: 960px;
  padding: 10px;
  font-size: 1.2rem;
`;
