import React from 'react';
import { styled } from 'styled-components';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
  } from 'mdb-react-ui-kit';
import  Data  from './EducationData.jsx';
import Data2 from './EducationData2.jsx';

const Text1 = styled.div`
    text-align: center;
    margin: 2rem auto;
    max-width: 960px;
    padding-bottom:50px;
`;

const CardBody = styled.div`
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
`;

const MDBCards = styled(MDBCard)`
    margin: 30px;
    height: 520px;

    @media only screen and (max-width: 860px){
        height: 620px;
      }
`;

const MDBCards2 = styled(MDBCard)`
    margin: 20px;
    height: 550px;

    @media only screen and (max-width: 1188px){
        height: 600px;
      }
    
    @media only screen and (max-width: 1000px){
        height: 700px;
      }
`;

const Title = styled.h4`
    font-weight: 700;
`;

const Btn = styled.a`
    color: #474747;
    border: 0 none;
    border-bottom: 2px solid #80c343;
    padding: 14px 0 4px;
    min-width: auto;
    padding: 10px;

`;


export default function EducationContent(){
    return(
        <div>
            <div className='pb-5'>
                <div>
                    <img src="https://images.acer.com/is/image/acer/Education_Home_Banner_2022_Large_v3:Primary-Hero-XL" alt="studentphoto" className='w-100'/>
                </div>
            </div>
            <Text1>
                    <p>We believe in education because we believe in tomorrow. We know that when supported by empowering tools, only the sky is the limit for students and teachers.</p>
                    <p>Acer's education devices aim to engage and empower students and teachers of all ages in a secure environment, whether teaching, learning, or collaborating.</p>
            </Text1>
            <div className='text-center'>
                <h3 className='pb-5'>Why SBytes?</h3>
            </div>

{/* First Card Set */}
            <div className='pb-5'>
                <CardBody className='d-md-flex row justify-content-md-center'>
                    {Data.map((data)=> {
                        return (
                            
                            <div className='col-12 col-sm-6 col-md-4 p-2'>
                                <MDBCards>
                                    <MDBCardImage src={data.src} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><Title>{data.title}</Title></MDBCardTitle>
                                        <MDBCardText className='pb-4'>{data.message}</MDBCardText>
                                    </MDBCardBody>
                                </MDBCards>
                            </div>
                        )
                    })} 
                </CardBody>
            </div>


{/* 2ND CARD SET */}
            <div>
                <CardBody className='d-md-flex row justify-content-md-center'>
                    {Data2.map((data)=>{
                        return (
                            <div className='col-12 col-sm-6 col-md-4 p-2'>
                                <MDBCards2>
                                    <MDBCardImage src={data.src} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle><Title>{data.title}</Title></MDBCardTitle>
                                        <MDBCardText>{data.message}</MDBCardText>
                                        <Btn className='btn' href='#'>Learn More</Btn>
                                    </MDBCardBody>
                                </MDBCards2>
                            </div>  
                        )
                    })}
                </CardBody>
            </div>  
        </div>
    );
}

