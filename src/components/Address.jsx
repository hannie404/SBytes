import React, { useState } from "react";
import styled from "styled-components";

const Address = () => {
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editedContact, setEditedContact] = useState("");
  const [editedAddress, setEditedAddress] = useState("");

  const addressData = [
    {
      Contact: "+63 9456 978 4657",
      Address: "1131 Dusty Townline, Jacksonville, TX 40332",
    },
  ];

  const handleEditClick = (field, value) => {
    if (field === "contact") {
      setIsEditingContact(true);
      setEditedContact(value);
    } else if (field === "address") {
      setIsEditingAddress(true);
      setEditedAddress(value);
    }
  };

  const handleSaveClick = (field) => {
    if (field === "contact") {
      setIsEditingContact(false);
      // Update your data store or API with the edited contact value.
    } else if (field === "address") {
      setIsEditingAddress(false);
      // Update your data store or API with the edited address value.
    }
  };

  return (
    <Container className="container-fluid col-lg-8 col-md-10 col-11 p-4 m-3 text-light">
      <Title className="d-flex">Contact Information</Title>
      <hr />
      <ol className="ps-0">
        {addressData.map((info, index) => (
          <Card key={index}>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3">
              <div className="d-flex align-items-center">
                <label className="text-secondary">Contact</label>
                {isEditingContact ? (
                  <input
                    type="text"
                    value={editedContact}
                    onChange={(e) => setEditedContact(e.target.value)}
                    className="ms-4 form-control"
                  />
                ) : (
                  <div className="ms-4">{info.Contact}</div>
                )}
              </div>
              {isEditingContact ? (
                <Change
                  onClick={() => handleSaveClick("contact")}
                  className="btn text-success"
                >
                  SAVE
                </Change>
              ) : (
                <Change
                  onClick={() => handleEditClick("contact", info.Contact)}
                  className="btn text-info"
                >
                  CHANGE
                </Change>
              )}
            </CardBG>
            <CardBG className="container-fluid d-flex justify-content-between p-3 bg-light text-dark d-flex mb-3">
              <div className="d-flex align-items-center">
                <label className="text-secondary">Address</label>
                {isEditingAddress ? (
                  <input
                    type="text"
                    value={editedAddress}
                    onChange={(e) => setEditedAddress(e.target.value)}
                    className="ms-4 form-control"
                  />
                ) : (
                  <div className="ms-4">{info.Address}</div>
                )}
              </div>
              {isEditingAddress ? (
                <Change
                  onClick={() => handleSaveClick("address")}
                  className="btn text-success"
                >
                  SAVE
                </Change>
              ) : (
                <Change
                  onClick={() => handleEditClick("address", info.Address)}
                  className="btn text-info"
                >
                  CHANGE
                </Change>
              )}
            </CardBG>
          </Card>
        ))}
      </ol>
      <hr />
      <h6>SHIPPING METHOD</h6>
      <div className="d-flex flex-column">
        <div className="mt-3">
          <input
            type="radio"
            name="free"
            id="free"
            className="form-check-input"
          />
          <span className="text-success ms-2">
            FREE <span className="text-secondary ms-3">Regular Shipping</span>
          </span>
        </div>
        <div className="mt-3">
          <input
            type="radio"
            name="free"
            id="free"
            className="form-check-input"
          />
          <span className="ms-2">
            $10 <span className="text-secondary ms-3">Priority Shipping</span>
          </span>
        </div>
      </div>
    </Container>
  );
};

export default Address;



const Card = styled.li`
  list-style: none;
`;

const CardBG = styled.div`
  border-radius: 15px;
`;

const Container = styled.div`
  background: #1F2937;
  border-top: 5px solid #DC2626;
  border-radius: 15px;
`;

const Title = styled.div`
  font-size: 2rem;
`;

const Change = styled.button`
  box-shadow: none;

  &:hover{
    box-shadow: none !important;
  }
`;