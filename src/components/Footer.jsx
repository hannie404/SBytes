import Logo from '../assets/logo/SBytesLight.png';
import styled from 'styled-components';
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooterDark bgColor='#111827' className='text-center text-lg-start text-light'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-danger'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-lg-4 m-2 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-lg-4 m-2 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a> */}
          <a href='' className='me-lg-4 m-2 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a> */}
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <LogoFooter src={Logo} title="Logo" alt="Logo" href='/home' />
              </h6>
              <p>
              At SBytes Tech, we're your go-to destination for cutting-edge technology. Our extensive selection includes everything from powerful laptops and sleek Chromebooks to robust desktops and efficient motors. 
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <SBytesH6 className='text-uppercase fw-bold mb-4'>Products</SBytesH6>
              <p>
                <a href='#!' className='text-reset'>
                  laptops
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Desktops
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Chromebooks
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Tablets
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Monitors
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <SBytesH6 className='text-uppercase fw-bold mb-4'>Useful links</SBytesH6>
              <p>
                <a href='#!' className='text-reset'>
                  Shop
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Products
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Business
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Education
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <SBytesH6 className='text-uppercase fw-bold mb-4'>Contact</SBytesH6>
              <p>
                <SBytesIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <SBytesIcon icon="envelope" className="me-3" />
                support@sbytes.tech
              </p>
              <p>
                <SBytesIcon icon="phone" className="me-3" /> + 01 246 7453 23
              </p>
              <p>
                <SBytesIcon icon="print" className="me-3" /> + 01 745 235 84
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <SBytes className='text-reset fw-bold' href='https://sbytes.com'>
          SBytes Tech
        </SBytes>
      </div>
    </MDBFooterDark>
  );
}

const MDBFooterDark = styled(MDBFooter)`
  background: #111827;
`;
const LogoFooter = styled.img`
  width: 10rem;
  margin-top: 1rem;

  @media only screen and (max-width: 540px){
    width: 5rem;
  }
`;
const SBytes = styled.a`
  color: #DC2626 !important;
`;
const SBytesH6 = styled.h6`
  color: #DC2626;
`;
const SBytesIcon = styled(MDBIcon)`
  color: #DC2626
`;