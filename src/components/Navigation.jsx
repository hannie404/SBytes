import React, { useState } from 'react';
import { Logo } from '../assets';
import styled from 'styled-components';
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

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <NavBar expand='lg' dark bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><LogoBytes src={Logo}/></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <LinkPage active aria-current='page' href='#'>
                Shop
              </LinkPage>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <LinkDropdown tag='a' className='nav-link' role='button'>
                  Products
                </LinkDropdown>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <LinkPage href='#'>Business</LinkPage>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <LinkPage href='#'>Education</LinkPage>
            </MDBNavbarItem>
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto'>
            <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
            <MDBBtn color='primary'>Search</MDBBtn>
          </form>
        </MDBCollapse>
      </MDBContainer>
    </NavBar>
  );
}

const NavBar = styled(MDBNavbar)`
  background: #111827 !important;
`;
const LogoBytes = styled.img`
  width: 7rem;
`;
const LinkPage = styled(MDBNavbarLink)`
  text-transform: uppercase;
  font-size: smaller;
`;
const LinkDropdown = styled(MDBDropdownToggle)`
  text-transform: uppercase;
  font-size: smaller;
`;