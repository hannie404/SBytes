import React from 'react';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';


const TabletsInfo = [
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-iconia-tab-p10-p10-11-wallpaper-ui-iron-gray-01-1?$Line-Overview-M1-M2-S$',
    Type: 'Iconia',
    Description: 'Capture and share moments while also enjoying brighter videos and smoother gameplay.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/ENDURO-Urban-T3-EUT310A-11A-wallpaper-UI-polaris-blue-06-7?$Line-Overview-M1-M2-S$',
    Type: 'Enduro Urban',
    Description: 'For those who are always chasing new adventures, they need devices with the hardware that can keep up with them.',
  },
  {
    ImageUrl: 'https://images.acer.com/is/image/acer/acer-enduro-t1-et110a-11a-wallpaper-ui-04?$Line-Overview-M1-M2-S$',
    Type: 'Enduro',
    Description: 'Field-ready devices that are ready to rise to any challenge.',
  },
]


function Desktops() {
  return (
    <>
      <Navigation />
      <div className='container-fluid mt-5 pt-5 d-flex flex-wrap justify-content-center'>
        {TabletsInfo.map((info, index) => (
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