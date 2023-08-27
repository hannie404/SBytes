import React, { useState } from 'react';
import {Spiral, Google} from '../assets';
import {
  MDBContainer,
  MDBInputGroup,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBValidation,
  MDBValidationItem
} from 'mdb-react-ui-kit';
import { Logo } from '../assets';
import styled from 'styled-components';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [formValue, setFormValue] = useState({
    fname: '',
    lname: '',
    email: '',
    pass: '',
    confirmPass: '',
  });

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });

    if (name === 'email') {
      setEmailError(emailValidate(value));
    } else if (name === 'pass' || name === 'confirmPass') {
      setPasswordError(passwordValidate(value));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const emailValidationResult = emailValidate(formValue.email);
    const passwordValidationResult = passwordValidate(formValue.pass);

    setEmailError(emailValidationResult);
    setPasswordError(passwordValidationResult);

    if (!emailValidationResult && !passwordValidationResult) {
      alert('Form submitted successfully'); 
    }

  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();

    formData.append('FirstName', formValue.fname);
    formData.append('LastName', formValue.lname);
    formData.append('email', formValue.email);
    formData.append('password', formValue.pass);
    formData.append('password_confirmation', formValue.confirmPass);

    await axios
    .post("/api/register", formData)
    .then(({data}) => {
      alert(data.Message);
      setLoading(false);

      navigate("/SignIn");
    })
    .catch(({response}) => {
      if (response.status === 422) {  // 422 - Unprocessable Entity
        alert(`there ${response.data.errors}`);
        setLoading(false);
      } else {
        alert(`here ${response.data.message}`);
        setLoading(false);
      }
    })

  }

  const emailValidate = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!value) return 'Email is required';
    if (!emailRegex.test(value)) return 'Please provide a valid email';
    return '';
  };

  const passwordValidate = (value) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    if (!/[a-z]/.test(value)) return 'Password must contain at least one lowercase letter';
    if (!/[A-Z]/.test(value)) return 'Password must contain at least one uppercase letter';
    if (!/[0-9]/.test(value)) return 'Password must contain at least one digit';
    if (!/[$@$!%*?&]/.test(value)) return 'Password must contain at least one special character ($, @, !, %, *, ?, &)';
  
    return '';
  };

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
    <MainContainer fluid className='d-flex flex-row justify-content-center align-items-center'>
      <FormContainer className='w-lg-100  d-flex flex-column justify-content-center align-items-center p-3 rounded-3'>
        <h1 className='text-light pb-3'>Sign up for an account</h1>
        <MDBValidation className='row g-3 d-flex justify-content-center text-light'>
          <Form onSubmit={onSubmit} className='col-md-12'>
            <MDBInput
              className='text-light'
              value={formValue.fname}
              name='fname'
              onChange={onChange}
              id='validationCustom01'
              required
              label='First name'
              type='text'
            />
          </Form>
          <Form onSubmit={onSubmit} className='col-md-12'>
            <MDBInput
              className='text-light'
              value={formValue.lname}
              name='lname'
              onChange={onChange}
              id='validationCustom02'
              required
              label='Last name'
              type='text'
            />
          </Form>
          <Form onSubmit={onSubmit} className='col-md-12' feedback='Please provide a valid email.' invalid>
            <MDBInput
              className='text-light'
              value={formValue.email}
              name='email'
              onChange={onChange}
              id='validationCustom03'
              required
              label='Email'
              type='email'
            />
            {emailError && <ErrorText>{emailError}</ErrorText>}
          </Form>
          <Form onSubmit={onSubmit} className='col-md-12' feedback='Please provide a valid password.' invalid>
            <MDBInput
              className='text-light'
              value={formValue.pass}
              name='pass'
              onChange={onChange}
              id='validationCustom04'
              required
              label='Password'
              type='password'
            />
            {passwordError && <ErrorText>{passwordError}</ErrorText>}
          </Form>
          <Form onSubmit={onSubmit} className='col-md-12' feedback='Incorrect password.' invalid>
            <MDBInput
              className='text-light'
              value={formValue.confirmPass}
              name='confirmPass'
              onChange={onChange}
              id='validationCustom05'
              required
              label='Confirm Password'
              type='password'
            />
          </Form>
          <Form onSubmit={onSubmit} className='col-12 d-flex justify-content-center' feedback='You must agree before submitting.' invalid>
            <MDBCheckbox label='Agree to terms and privacy' id='invalidCheck' required />
          </Form>
          <Form className='col-md-12 d-flex flex-column justify-content-center'>
            <MDBBtn className='mb-3 p-3 btn-success' type='submit' onClick={onSubmitHandler} >SIGN UP</MDBBtn>
            <MDBBtn className='btn-light' type='reset'><GoogleImg src={Google} />SIGN UP WITH GOOGLE</MDBBtn>
          </Form>
          <Form className='d-flex justify-content-center text-light'>
            Already have an account? <NavLink to='/SignIn'>&nbsp; Log In</NavLink>
          </Form>
        </MDBValidation>
      </FormContainer>

      <ImageContainer fluid className='pt-3 pb-3 vh-100'>
        <SbytesBg fluid className='d-flex justify-content-center'>
          <LogoImg src={Logo} />
        </SbytesBg>
      </ImageContainer>
    </MainContainer>
  );
}

const ErrorText = styled.span`
  color: red;
  font-size: 12px;
`;

const MainContainer = styled(MDBContainer)`
  background: #1F2937;
  padding: 0% !important;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    height: 100% !important;
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
  max-width: 30rem ;
  min-width: 20rem ;

  label{
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