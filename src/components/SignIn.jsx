import React, { useEffect, useState } from "react";
import { Spiral, Google } from "../assets";
import {
  MDBContainer,
  MDBInputGroup,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import { Logo } from "../assets";
import styled from "styled-components";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    setLoading(true);

    await axios
      .post("/api/login", formData)
      .then(({ data }) => {
        let currentUser = data.User;

        setLoading(false);
        if (currentUser.AccessType === "User") {
          navigate("/", { state: currentUser });
        } else {
          navigate("/SignUp", { state: currentUser, message: "Success" });
        }
      })
      .catch(({ response }) => {
        if (response.status === 422) {
          // 422 - Unprocessable Entity
          alert(`there ${response.data.errors}`);
          setLoading(false);
        } else {
          alert(`doon ${response.data.errors}`);
          setLoading(false);
        }
      });
  };

  // useEffect(() => {
  //   setCurrentUser(currentUser);
  //   console.log(currentUser);
  // }, [currentUser]);

  if (loading) {
    return (
      <div>
        <h1>
          Loading...
          <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </h1>
      </div>
    );
  }

  return (
    <MainContainer
      fluid
      className="d-flex flex-row justify-content-center align-items-center"
    >
      <FormContainer className="w-lg-100  d-flex flex-column justify-content-center align-items-center p-3 rounded-3">
        <h1 className="text-light pb-3">Sign In</h1>
        <MDBValidation className="row g-3 d-flex justify-content-center text-light">
          <Form className="col-md-12" feedback="Incorrect email" invalid>
            <MDBInput
              className="text-light"
              name="email"
              id="validationCustom03"
              required
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form>
          <Form className="col-md-12" feedback="Incorrect password." invalid>
            <MDBInput
              className="text-light"
              name="pass"
              id="validationCustom04"
              required
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form>
          <Form className="col-md-12 d-flex flex-column justify-content-center">
            <MDBBtn
              className="mb-3 p-3 btn-success"
              type="submit"
              onClick={loginSubmitHandler}
            >
              SIGN IN
            </MDBBtn>
            <MDBBtn className="btn-light" type="reset">
              <GoogleImg src={Google} />
              SIGN In WITH GOOGLE
            </MDBBtn>
          </Form>
          <Form className="d-flex justify-content-center text-light">
            Don't have an existing account?{" "}
            <NavLink to="/SignUp">&nbsp; Sign Up</NavLink>
          </Form>
        </MDBValidation>
      </FormContainer>

      <ImageContainer fluid className="pt-3 pb-3 vh-100">
        <SbytesBg fluid className="d-flex justify-content-center">
          <LogoImg src={Logo} />
        </SbytesBg>
      </ImageContainer>
    </MainContainer>
  );
}

const MainContainer = styled(MDBContainer)`
  background: #1f2937;
  padding: 0% !important;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: 100vh !important;
  }
`;

const FormContainer = styled(MDBContainer)`
  width: 50%;
  min-width: 20rem !important;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0% !important;
    margin-left: 0% !important;
  }
`;

const SbytesBg = styled(MDBContainer)`
  /* min-width: 20rem; */
  background: url(${Spiral}), #374151;
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: right;
  height: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 30vh;
  }
`;

const ImageContainer = styled(MDBContainer)`
  width: 50%;
  min-width: 20rem;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: auto !important;
    margin: 0% !important;
  }
`;

const LogoImg = styled.img`
  width: 30%;
  min-width: 8rem;
  height: max-content;
  margin-bottom: 1rem;
`;

const Form = styled(MDBValidationItem)`
  color: #fff !important;
  max-width: 30rem;
  min-width: 20rem;

  label {
    color: #ffffff97 !important;
  }

  @media only screen and (max-width: 768px) {
    /* margin-bottom: 0.5rem !important; */
  }
`;

const GoogleImg = styled.img`
  width: 1.8rem;
  margin-right: 10px !important;
`;
