import React from 'react';
import { MDBNavbar, MDBContainer, MDBRow, MDBCol, MDBFooter, MDBIcon } from 'mdbreact';
import Logo from '../assets/logo/SBytesLight.png';
import styled from 'styled-components';
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter
} from '../assets';

const Footer = () => {
  return (
    <MDBFooter color="dark" style={{ background: '#111827', color: 'white'}}>
      <MDBContainer>
        <MDBRow className='mt-2'>
          <div style={{ textAlign: 'left' }} className='d-flex flex-row justify-content-between w-100 align-items-center'>
            <LogoFooter src={Logo} title="Logo" alt="Logo" href='/home' />
            <div className="social-links mt-3">
              <a><MDBIconBytes fab icon="instagram" /></a>
              <a><MDBIconBytes fab icon="youtube" /></a>
              <a><MDBIconBytes fab icon="linkedin" /></a>
              <a><MDBIconBytes fab icon="twitter" /></a>
            </div>
          </div>
        </MDBRow>
        <hr />
        <MDBRow className="footer-top-wrapper justify-content-between" style={{ gap: '48px', padding: '16px', minHeight: '160px' }}>
          <MDBColBytes lg="4" md='5'  className='w-lg-0'>
            <menu style={{ textAlign: 'left', lineHeight: 2 }}>
              <BytesFooter>About us</BytesFooter>
              <BytesList>
              We offer tailored solutions, exceptional service, and cutting-edge technology to empower your business's success. Discover the Elite difference today!
              </BytesList>
            </menu>
          </MDBColBytes>
          <MDBColBytes lg="3" md='5' className='w-md-0'>
            <menu style={{ textAlign: 'left', lineHeight: 2 }}>
              <BytesFooter>Services</BytesFooter>
              <BytesList><a>Web Development</a></BytesList>
              <BytesList><a>Mobile Development</a></BytesList>
              <BytesList><a>Cyber Security</a></BytesList>
            </menu>
          </MDBColBytes>
          <MDBColBytes lg="3" md='5' className='w-md-0'>
            <menu style={{ textAlign: 'left', lineHeight: 2 }}>
              <BytesFooter>Services</BytesFooter>
              <BytesList><a>Web Development</a></BytesList>
              <BytesList><a>Mobile Development</a></BytesList>
              <BytesList><a>Cyber Security</a></BytesList>
            </menu>
          </MDBColBytes>
          <MDBColBytes lg="3" md='5' className='w-md-0'>
            <menu style={{ textAlign: 'left', lineHeight: 2 }}>
              <BytesFooter>Contact</BytesFooter>
              <BytesList><a>info@sbytes.com.au</a></BytesList>
              <BytesList><a>+63 9234 323 4244</a></BytesList>
            </menu>
          </MDBColBytes>
        </MDBRow>
        <hr />
        <MDBRow className="pb-3" style={{
          height: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '4px',
          width: '100%',
          marginLeft: '0',
          textAlign: 'center'
        }}>
          <MDBCol className='footerDown'>
            <small>&copy; SBytes. 2023 All rights reserved</small>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;

const LogoFooter = styled.img`
  width: 10rem;
  margin-top: 1rem;

  @media only screen and (max-width: 540px){
    width: 5rem;
  }
`;
const MDBIconBytes = styled(MDBIcon)`
  width: 2rem;
  font-size: 1.5rem;
  margin-left: 0.5rem;

  @media only screen and (max-width: 540px){
    font-size: 1rem;
    margin-left: 10px;
    width: fit-content;
  }
`;
const BytesList = styled.li`
  list-style: none;
`;
const MDBColBytes = styled(MDBCol)`
  /* width: 20%; */
`;
const BytesFooter = styled.h2`
  color: #DC2626;
`;