// import React from 'react';
// import { MDBNavbar, MDBContainer, MDBRow, MDBCol, MDBFooter, MDBIcon } from 'mdbreact';
import Logo from '../assets/logo/SBytesLight.png';
import styled from 'styled-components';
// import {
//   Instagram,
//   Youtube,
//   Linkedin,
//   Twitter
// } from '../assets';

// const Footer = () => {
//   return (
//     <MDBFooter color="dark" style={{ background: '#111827', color: 'white'}}>
//       <MDBContainer>
//         <MDBRow className='mt-2'>
//           <div style={{ textAlign: 'left' }} className='d-flex flex-row justify-content-between w-100 align-items-center'>
//             <LogoFooter src={Logo} title="Logo" alt="Logo" href='/home' />
//             <div className="social-links mt-3">
//               <a><MDBIconBytes fab icon="instagram" /></a>
//               <a><MDBIconBytes fab icon="youtube" /></a>
//               <a><MDBIconBytes fab icon="linkedin" /></a>
//               <a><MDBIconBytes fab icon="twitter" /></a>
//             </div>
//           </div>
//         </MDBRow>
//         <hr />
//         <MDBRow className="footer-top-wrapper justify-content-between" style={{ gap: '48px', padding: '16px', minHeight: '160px' }}>
//           <MDBColBytes lg="4" md='5'  className='w-lg-0'>
//             <menu style={{ textAlign: 'left', lineHeight: 2 }}>
//               <BytesFooter>About us</BytesFooter>
//               <BytesList>
//               We offer tailored solutions, exceptional service, and cutting-edge technology to empower your business's success. Discover the Elite difference today!
//               </BytesList>
//             </menu>
//           </MDBColBytes>
//           <MDBColBytes lg="3" md='5' className='w-md-0'>
//             <menu style={{ textAlign: 'left', lineHeight: 2 }}>
//               <BytesFooter>Services</BytesFooter>
//               <BytesList><a>Web Development</a></BytesList>
//               <BytesList><a>Mobile Development</a></BytesList>
//               <BytesList><a>Cyber Security</a></BytesList>
//             </menu>
//           </MDBColBytes>
//           <MDBColBytes lg="3" md='5' className='w-md-0'>
//             <menu style={{ textAlign: 'left', lineHeight: 2 }}>
//               <BytesFooter>Services</BytesFooter>
//               <BytesList><a>Web Development</a></BytesList>
//               <BytesList><a>Mobile Development</a></BytesList>
//               <BytesList><a>Cyber Security</a></BytesList>
//             </menu>
//           </MDBColBytes>
//           <MDBColBytes lg="3" md='5' className='w-md-0'>
//             <menu style={{ textAlign: 'left', lineHeight: 2 }}>
//               <BytesFooter>Contact</BytesFooter>
//               <BytesList><a>info@sbytes.com.au</a></BytesList>
//               <BytesList><a>+63 9234 323 4244</a></BytesList>
//             </menu>
//           </MDBColBytes>
//         </MDBRow>
//         <hr />
//         <MDBRow className="pb-3" style={{
//           height: 'auto',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '4px',
//           width: '100%',
//           marginLeft: '0',
//           textAlign: 'center'
//         }}>
//           <MDBCol className='footerDown'>
//             <small>&copy; SBytes. 2023 All rights reserved</small>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </MDBFooter>
//   );
// };

// export default Footer;

// const LogoFooter = styled.img`
//   width: 10rem;
//   margin-top: 1rem;

//   @media only screen and (max-width: 540px){
//     width: 5rem;
//   }
// `;
// const MDBIconBytes = styled(MDBIcon)`
//   width: 2rem;
//   font-size: 1.5rem;
//   margin-left: 0.5rem;

//   @media only screen and (max-width: 540px){
//     font-size: 1rem;
//     margin-left: 10px;
//     width: fit-content;
//   }
// `;
// const BytesList = styled.li`
//   list-style: none;
// `;
// const MDBColBytes = styled(MDBCol)`
//   /* width: 20%; */
// `;
// const BytesFooter = styled.h2`
//   color: #DC2626;
// `;

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
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
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
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <SBytesH6 className='text-uppercase fw-bold mb-4'>Products</SBytesH6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <SBytesH6 className='text-uppercase fw-bold mb-4'>Useful links</SBytesH6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
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
                info@example.com
              </p>
              <p>
                <SBytesIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <SBytesIcon icon="print" className="me-3" /> + 01 234 567 89
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