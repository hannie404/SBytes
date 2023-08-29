import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { NavLink, useLocation } from 'react-router-dom';



const ChromebooksInfo = [
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-chromebook-enterprise-spin-714-cp714-2wn-fingerprint-backlit-on-wp-ui-steel-gray-01-1?$Line-Overview-M1-M2-S$',
    Type: 'Business',
    Description: 'Fast, secure, and easy to manage, these Chromebooks are a perfect fit for nearly any type of work or business.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-chormebook-516-ge-cbg516-1h-backlit-on-red-wallpaper-chrome-ui-1-titanium-gray-01-1?$Line-Overview-M1-M2-S$',
    Type: 'Cloud Gaming',
    Description: 'Get a taste of the next generation of gaming with Chromebooks designed to amplify your experience.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-chormebook-vero-514-cbv514-1ht-fingerprint-backlit-on-wallpaper-chrome-ui-cobblestone-gray-01-1?$Line-Overview-M1-M2-S$',
    Type: 'Essential',
    Description: 'These Chromebooks get things done quickly, easily, and securely with innovative features and built-in virus protection.',
  },
]


function Desktops() {
  return (
    <>
      <Navigation />
      <div className='container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center'>
        {ChromebooksInfo.map((info, index) => (
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