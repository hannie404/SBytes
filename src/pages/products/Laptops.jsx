import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

const LaptopsInfo = [
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/predator-triton-17x-ptx17-71-with-fingerprint-perkey-backlit-on-wallpaper-black-01-2?$Line-Overview-M1-M2-S$',
    Type: 'Gaming Laptops',
    Description: 'Laptops built to level up, grind, and conquer all.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/Spin-5-SP513-55N-FpBl1-Sg-wallpaper-win11-01?$Line-Overview-M1-M2-S$',
    Type: 'Spin',
    Description: '2-in-1’s housing powerful innovation.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-aspire-7-a715-51g-A715-76-finger-print-wallpaper-win11-charcoal-black-01-1?$Line-Overview-M1-M2-S$',
    Type: 'Aspire',
    Description: 'The original and all-inclusive day-to-dayer.',
  },
]

function Laptops() {
  return (
    <>
      <Navigation />
      <div className='container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center'>
        {LaptopsInfo.map((info, index) => (
          <Card className='col-lg-3 col-md-5 col-12 m-3 p-3 d-flex flex-column justify-content-between align-items-center text-light'>
            <CardImg src={info.ImageUrl} />
            <h3 className='mt-3'>{info.Type}</h3>
            <p className='text-center mt-3'>{info.Description}</p>
            <input type="button" value="Learn More" className='btn btn-light w-100'/>
          </Card>
        ))}
      </div>
      <Footer />
    </>
  )
}

export default Laptops

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