import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink, useLocation } from 'react-router-dom';



const MonitorsInfo = [
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/pm1_pm161q-wp-01?$Line-Overview-M1-M2-S$',
    Type: 'Entertainment',
    Description: 'The full-force entertainment display. ',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/BC0_BC270U_wp-01?$Line-Overview-M1-M2-S$',
    Type: 'Business',
    Description: 'The business computing display.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/XV2_XV252QZ_wp_01?$Line-Overview-M1-M2-S$',
    Type: 'Gaming',
    Description: 'A monitor for every situation – whether you prefer fast-paced with high refresh, ultrawide or color-rich gaming. ',
  },
]


function Desktops() {
  return (
    <>
      <Navigation />
      <div className='container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center'>
        {MonitorsInfo.map((info, index) => (
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