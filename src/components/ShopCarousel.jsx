import React from 'react';
import styled from 'styled-components';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const StyledCarousel = styled(MDBCarousel)`
  padding-top: 6rem !important;

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

      padding-top: 1rem !important;
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


export default function ShopCarousel() {
  return (
    <StyledCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://static-ecpa.acer.com/media/wysiwyg/AcerUS_23Q3_eComm_W34_Aspire_1620X600.jpg'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://static-ecpa.acer.com/media/wysiwyg/AcerUS_23Q3_eComm_W34_SwiftEdge16_1620X600.jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://static-ecpa.acer.com/media/wysiwyg/AcerUS_23Q3_eComm_W34_AOPEN_1620X600.jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </StyledCarousel>
  );
}