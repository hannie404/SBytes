import React from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styled from 'styled-components';
import { Heart } from '../assets';
import { MDBContainer} from 'mdb-react-ui-kit';
import axios from 'axios';

const StyledTrack = styled.div`
  color: #DC2626;

  .splide__track {
    background: none;
    padding-bottom: 3rem; 
  }
`;

const StyledArrows = styled.div`
  .splide__arrow {
    background: #fff;  
    border-radius: 50%;

    &:hover {
      background: #555;
    }
  }

  @media only screen and (max-width: 600px){
    .splide__arrow {
      display: none;
    }
  }
`;
const StyledArrowsBytes = styled(StyledArrows)`
  border-color: #DC2626 !important;
`;
const SBytesImg = styled.img`
  width: 15rem;
`;
const Buttons = styled(MDBContainer)`
  visibility: hidden;

  @media only screen and (max-width: 600px) {
    visibility: visible;
  }
`;
const Card = styled.div`
  background: #2a3442;
  margin: 1rem;
  margin-bottom: 0%;
  padding: 1rem;
  padding-top: 0%;
  border-top: 5px solid #DC2626;
  border-radius: 15px;

  &:hover{
    background: #2f3846;
    border-color: #41e680;
  }

  &:hover ${Buttons} {
    visibility: normal !important;
  }
`;
const Price = styled.p`
  color: #41e680;
`;
const HeartDiv = styled.div`
  background: #DC2626;
  transition: background 0.3s ease-in-out;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;

  &:hover{
    background: #41e680;
  }
`;
const CartDiv = styled.div`
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
  background: #2a3442;
  color: #fff;

  &:hover{
    background: #f7dbdb !important;
    color: #2a3442;
  }
`;
const Name = styled.h4`
  color: #41e680;
`;
const SbytesSlide = styled(SplideSlide)`
  &:hover ${Buttons}{
    visibility: visible;
  }
`;

function SlideCard({ laptops, title }) {
  const USformatter = new Intl.NumberFormat("en-US"); // for formatting the price

  const accountValidation = async () => {
    await axios.get("/api/accounts/accountvalidation").then(({ data }) => {
      console.log(data.Status);
      if (data.Status === 200) {
        alert("Success!");
      } else {
        alert(`Failed! Status : ${data.Message}`);
      }
    })
  }


  return (
    <StyledTrack className='mt-5 mb-5 ps-lg-5 pe-lg-5 ps-3 pe-3 d-flex flex-column justify-content-center'>
        <h2 className='text-light'>{title}</h2>
      <StyledArrowsBytes className='border-top border-3 mt-2 pt-5'>
        <Splide
          options={{
            // type: 'loop',
            perPage: 4,
            autoplay: true,
            arrows: true,
            breakpoints: {
              1300: {
                perPage: 3,
              },
              900: {
                perPage: 2,
              },
              600: {
                perPage: 1,
              },
            },
          }}
        className='marghin-top: 5px'
        >
          {laptops.map((laptop, index) => (
            <SbytesSlide key={index}>
              <Card className="laptop-card text-light d-flex flex-column align-items-center justify-content-center ps-lg-5 pe-lg-5 ps-md-3 pe-md-3">
                <SBytesImg src={`http://localhost:8000/storage/products/images/${laptop.ImageUrl}`} />
                <Name className='mb-3'>{laptop.ProductSeriesName} {laptop.ProductModel}</Name>
                <p>
                  <ul>
                    <li><b>Operating System</b> : {laptop.OperatingSystem}</li>
                    <li><b>CPU</b> : {laptop.Cpu}</li>
                    <li><b>Memory</b> : {laptop.Memory}</li>
                    <li><b>Storage</b> : {laptop.Storage}</li>
                    <li><b>Integreated GFX</b> : {laptop.IntegratedGfx}</li>
                    <li><b>Refresh Rate</b> : {laptop.RefreshRate}</li>
                    <li><b>Resolution</b> : {laptop.Resolution}</li>
                    <li><b>Screen Size</b> : {laptop.ScreenSize}</li>
                  </ul>
                </p>
                <Price>Price: ₱{USformatter.format(laptop.Price)}</Price>
              </Card>
              <Buttons fluid className='d-flex ps-3 pe-3 mt-3'>
                <HeartDiv className='w-25 d-flex align-items-center justify-content-center pt-3 pb-3' type='button' id='addToWish'><img src={ Heart } /></HeartDiv>
                <CartDiv className='w-75 d-flex align-items-center justify-content-center pt-3 pb-3' type='button' id='addToCart' onClick={accountValidation}>Add to Cart</CartDiv>
              </Buttons>
            </SbytesSlide>
          ))}
        </Splide>
      </StyledArrowsBytes>
    </StyledTrack>
  )
}

export default SlideCard