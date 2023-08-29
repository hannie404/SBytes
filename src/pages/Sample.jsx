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
import ProductCard from '../components/ProductCard';
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
  return (
    <>
      <Navigation />
      <ProductCard />
      <Footer />
    </>
  )
}

export default Sample;
