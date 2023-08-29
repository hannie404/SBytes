import React, { useState, useEffect } from 'react';
import { Logo, Search, Cart, User } from '../assets';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App({currentUser}) {
  const [showBasic, setShowBasic] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const user = currentUser;

  useEffect(() => {
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 10) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const username = [
    {
      fname: 'Annie',
      lname: 'Nesh'
    }
  ]

  return (
    <NavBar scrolled={scrolled} expand='lg' dark bgColor='light' className='pt-lg-5 pb-lg-5 fixed-top'>
      <MDBContainer fluid>
        <MDBNavbarBrandMobile href='#'><LogoBytes src={Logo} /></MDBNavbarBrandMobile>
        
        <div className="d-flex">
          <HideLg className='d-flex input-group w-auto me-2 d-flex align-items-center'>            
            <LinkPage to='/SignIn'>
              <img src={ User } className='ms-lg-3 ms-md-2 ms-2'/>
            </LinkPage>
            
            <LinkPage to='/Cart' className='mt-0'>
              <img src={ Cart } className='ms-lg-3 ms-md-2 ms-2'/>
            </LinkPage>
          </HideLg>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
        </div>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-md-auto mb-2 mb-lg-0 w-auto'>
            <MDBNavbarItem className='mt-sm-2'>
              <LinkPage active aria-current='page' to='/' className="ms-lg-3 mt-sm-3">
                Shop
              </LinkPage>
            </MDBNavbarItem>

            <MDBNavbarItem className='mt-sm-2 mt-lg-1'>
              <MDBDropdown>
                <LinkDropdown tag='a' role='button' className="ms-lg-3 nav-link">
                  Products
                </LinkDropdown>
                <MDBDropdownMenu className='mt-lg-3'>
                  <LinkPageProducts link href='/#/Laptops'>Laptops</LinkPageProducts>
                  <LinkPageProducts link href='/#/Desktops'>Desktops & All-in-Ones</LinkPageProducts>
                  <LinkPageProducts link href='/#/Chromebooks'>Chromebooks</LinkPageProducts>
                  <LinkPageProducts link href='/#/Tablets'>Tablets</LinkPageProducts>
                  <LinkPageProducts link href='/#/Monitors'>Monitors</LinkPageProducts>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem className='mt-sm-2'>
              <LinkPage to='/Business' className="ms-lg-3">Business</LinkPage>
            </MDBNavbarItem>

            <MDBNavbarItem className='mt-sm-2'>
              <LinkPage to='/Education' className="ms-lg-3">Education</LinkPage>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <NavLogo to='/'><LogoBytes src={Logo}/></NavLogo>

          <form className='d-flex input-group w-auto mt-sm-3 mt-lg-0 d-flex align-items-center'>
            {/* <SearchInput type='search' className='form-control' placeholder='Search' aria-label='Search' />
            <SearchBar><SearchIcon src={Search} /></SearchBar> */}
            {username.map((info, index) => (
              <SbyteUser>
                <LinkDropdown tag='a' role='button' className="ms-lg-0 nav-link d-flex align-items-center">
                  <div key={index} className='me-2'>
                    {info.fname} {info.lname}
                  </div>
                </LinkDropdown>
                <MDBDropdownMenu className='mt-2'>
                  <LinkPageProducts link href='/#/SignUp'>Log Out</LinkPageProducts>
                  <LinkPageProducts link href='/#/Admin'>Admin</LinkPageProducts>
                </MDBDropdownMenu>
              </SbyteUser>
            ))}
            
            <Hide className='d-flex'>
              <LinkPage to='/SignIn'>
                <img src={ User } className='ms-lg-3 ms-md-2 ms-2'/>
              </LinkPage>
              
              <LinkPage to='/Cart'>
                <img src={ Cart } className='ms-lg-3 ms-md-2 ms-2'/>
              </LinkPage>
            </Hide>
          </form>

        </MDBCollapse>
      </MDBContainer>
    </NavBar>
  );
}

const SbyteUser = styled(MDBDropdown)`
  width: 15rem;
  display: flex;
  justify-content: end;

  @media only screen and (max-width: 991px){
    justify-content: start;
  }
`;
const NavBar = styled(MDBNavbar)`
  background: ${props => props.scrolled ? 'rgba(5, 8, 49, 0.541)' : '#111827'} !important;
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};

  @media only screen and (min-width: 992px){
    padding-left: 2rem;
    padding-right: 2rem !important;
  }
`;
const LogoBytes = styled.img`
  width: 7rem;
`;
const LinkPage = styled(NavLink)`
  color: lightgray;
  text-transform: uppercase;
  font-size: smaller;

  &:hover{
    color: #DC2626;
  }

  @media only screen and (max-width: 992px){
    /* margin-top: 1rem !important; */
  }
`;
const LinkPageProducts = styled(MDBDropdownItem)`
  text-transform: uppercase;
  font-size: smaller;
`;
const LinkDropdown = styled(MDBDropdownToggle)`
  text-transform: uppercase;
  font-size: smaller;
  color: lightgray;

  &:hover{
    color: #DC2626;
  }
`;
const SearchBar = styled(MDBBtn)`
  border-radius: 0px 50px 50px 0px !important;
  background-color: #1F2937 !important;
  box-shadow: none;
  padding-left: 15px !important;
  padding-right: 1.5rem !important;

  &:hover{
    background-color: #DC2626 !important;
    box-shadow: none !important;
  }
`;
const SearchIcon = styled.img`
  width: 18px;
`;
const SearchInput = styled.input`
  background: #1F2937;
  border-radius: 50px;
  border: 2px solid #1F2937;
  padding-left: 1.5rem;
  color: #D1D5DB;

  &::placeholder{
    color: #D1D5DB;
  }

  &:focus{
    border: 1px solid #1F2937 !important;
  }

  @media only screen and (min-width: 991px){
    width: 10rem !important;
    padding-left: 2rem;
    padding-right: 2rem !important;
  }
`;
const NavLogo = styled(NavLink)`
  width: 100%;
  display: flex !important;
  justify-content: center !important;

  @media only screen and (max-width: 991px){
    display: none !important;
  }
`;
const MDBNavbarBrandMobile = styled(MDBNavbarBrand)`
  @media only screen and (min-width: 991px){
    display: none;
  }
`;
const NavLinkBytes = styled(NavLink)`
  color: #1F2937;
`;
const Hide = styled.div`
  @media only screen and (max-width: 991px){
    display: none !important;
  }
`;
const HideLg = styled.div`
  @media only screen and (min-width: 991px){
    display: none !important;
  }
`;