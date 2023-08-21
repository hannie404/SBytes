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

      @media only screen and (max-width: 992px){
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

  .carousel-indicators {
    li {
      background-color: #DC2626; // Default or unselected indicator color: ;
      
      &.active {
        background-color: #DC2626; // Active or selected indicator color: ;
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
        src='https://images.acer.com/is/image/acer/acer-laptop-swift-edge-main-banner-2:Primary-Hero-XL'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://images.acer.com/is/image/acer/predator-laptop-helios-16-agw-banner-1:Primary-Hero-L'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://images.acer.com/is/image/acer/Nitro_17_AMD_(Spacia_PEH)_banner-1:Primary-Hero-XL'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </StyledCarousel>
  );
}