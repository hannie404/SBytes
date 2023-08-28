import React from "react";
import styled from "styled-components";
import { MDBCarousel, MDBBtn, MDBCarouselItem } from "mdb-react-ui-kit";

const StyledCarousel = styled(MDBCarousel)`
  .carousel-control-prev,
  .carousel-control-next {
    width: 50px;
    transition: all 0.3s ease; // Add transition effect here

    &-icon {
      background-image: url("path_to_your_new_arrow_image.svg");
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
      background-color: #dc2626;

      &.active {
        background-color: #dc2626;
      }
    }
  }
`;

export default function Carousel() {
  return (
    <StyledCarousel showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={1}
        src="https://images.acer.com/is/image/acer/acer-for-business-solution-hero-banner-business:Primary-Hero-XL"
        alt="..."
      >
        <Text1>
          <Title>Sbytes for Business</Title>
          <p>
            We are committed to delivering customizable and <br />
            cutting-edge devices that give your businesses <br /> the
            performance it needs in an always-on, digitally-driven <br /> world.
          </p>
        </Text1>
      </MDBCarouselItem>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={2}
        src="https://images.acer.com/is/image/acer/acer-for-business-solution-hero-banner-microsoft-inspire:Primary-Hero-XL"
        alt="..."
      >
        <Text1>
          <Title>Microsoft Inspire 2023</Title>
          <p>
            Check out Sbytes at Microsoft Inspire 2023 to <br /> stay up to date
            on our latest sustainability efforts and products <br /> that
            empower your business.
          </p>
          <MDBBtn className="bg-danger">Explore</MDBBtn>
        </Text1>
      </MDBCarouselItem>
    </StyledCarousel>
  );
}

const Text1 = styled.div`
  text-align: left;
  margin: 5rem 0.5rem;
  max-width: 960px;
  padding: 10px;
  font-size: 1.2rem;
`;

const Title = styled.div`
  font-weight: 800;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
