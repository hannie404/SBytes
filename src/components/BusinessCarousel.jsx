import React from 'react';
import styled from 'styled-components';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const StyledCarousel = styled(MDBCarousel)`
  .carousel-control-prev,
  .carousel-control-next {
    width: 50px;
    transition: all 0.3s ease;  // Add transition effect here 

    &-icon {
      background-image: url('path_to_your_new_arrow_image.svg');
      width: 30px;
      height: 30px;
      background: #111827;
      padding: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    @media only screen and (max-width: 992px) {
      &-icon {
        background: none;
        width: 20px;
        height: 20px;
      }
    }
  }

  .carousel-control-prev {
    left: 20px;
  }

  .carousel-control-next {
    right: 20px;
  }

  &:hover {
    .carousel-control-prev {
      left: 60px;
    }

    .carousel-control-next {
      right: 60px;
    }
  }

  .carousel-indicators {
    li {
      background-color: #DC2626;

      &.active {
        background-color: #DC2626;
      }
    }
  }
`;


export default function Carousel() {
  return (
    <StyledCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://images.acer.com/is/image/acer/acer-for-business-solution-hero-banner-business:Primary-Hero-XL'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.acer.com/is/image/acer/acer-for-business-solution-hero-banner-microsoft-inspire:Primary-Hero-XL'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
    </StyledCarousel>
  );
}