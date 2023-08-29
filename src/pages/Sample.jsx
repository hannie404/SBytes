import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import UsersTable from '../components/UsersTable';
import ProductsTable from '../components/ProductsTable';
import styled from 'styled-components';
import CardList from '../components/CardList';
import CartCard from '../components/CartCard';
import LaptopShoppingCart from '../components/ShoppingCart';
import Product from '../components/Product';
import Address from '../components/Address';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Payment from '../components/Payment';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';


//         {/* <Navigation /> */}
//         {/* <Bg className='mt-5 pt-5'> */}
//         {/* <SideNav />
//         <CardList /> */}
//         {/* <UsersTable /> */}
//         {/* <ProductsTable /> */}
//         {/* <Product /> */}
//         {/* <LaptopShoppingCart />
//         <Address />
//         <CartCard /> */}

function Sample() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  const Link = styled(MDBTabsLink)`
      background: ${props => props.active ? 'linear-gradient(to bottom, #1f2937, #1f293734)' : '#d3deee34'} !important;
      border-bottom: none !important;
      border-top: 3px solid ${props => props.active ? '#DC2626' : 'transparent'} !important;
      color: ${props => props.active ? 'white' : 'initial'} !important;
  `;

  const Tabs = styled(MDBTabs)`
    margin-top: 6rem;
  `

  return (
    <>
      <Navigation />
      <Tabs fill>
        <MDBTabsItem>
          <Link onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            CART
          </Link>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
            SHIPPING
          </Link>
        </MDBTabsItem>
        <MDBTabsItem>
          <Link onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
            PAYMENT
          </Link>
        </MDBTabsItem>
      </Tabs>
      
      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'}>
          <div class="container-fluid justify-content-center d-flex">
            <LaptopShoppingCart />
            <CartCard />
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>
          <div class="container-fluid justify-content-center d-flex">
            <Address />
            <CartCard />
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>
          <div class="container-fluid justify-content-center d-flex">
            <Payment />
            <CartCard />
          </div>
        </MDBTabsPane>
      </MDBTabsContent>


      <Footer />
    </>
  )
}

export default Sample;
