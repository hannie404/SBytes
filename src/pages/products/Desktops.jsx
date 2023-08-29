import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink, useLocation } from 'react-router-dom';


const DesktopsInfo = [
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-aspire-c24-1751-wallpaper-win11-e19-rfkbms-black01?$Line-Overview-M1-M2-S$',
    Type: 'Aspire All in Ones',
    Description: 'The go-to for ease and simplicity.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-veriton-vvz4694g-wallpaper-win11-usb-keyboard-mouse-elite19-black-01?$Line-Overview-XL$',
    Type: 'Meet the Veriton All-in-Ones',
    Description: 'Premium computing power in a space-saving design.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/chromebase-ca24i2-wp-usbkbms-01?$Line-Overview-XL$',
    Type: 'Chromebox',
    Description: 'Ideal for Home, Enterprise, and Business',
  },
]


function Desktops() {
  return (
    <>
      <Navigation />
      <div className='container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center'>
        {DesktopsInfo.map((info, index) => (
          <Card className='col-lg-3 col-md-5 col-12 m-3 p-3 d-flex flex-column justify-content-between align-items-center text-light'>
            <CardImg src={info.ImageUrl} />
            <h3 className='mt-3'>{info.Type}</h3>
            <p className='text-center mt-3'>{info.Description}</p>
            <NavLink to='/ProductPage' className="w-100"><input type="button" value="Learn More" className='btn btn-light w-100'/></NavLink>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Desktops

const Card = styled.div`
  background: #1F2937;
  border-top: 5px solid #DC2626;
  border-radius: 15px;

  &:hover{
    background: #293241;
    border-top: 5px solid #41e680;
  }
`;

const CardImg = styled.img`
  width: 15rem;
`