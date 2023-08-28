import React from 'react';
import SideNav from '../components/SideNav';
import UsersTable from '../components/UsersTable';
import ProductsTable from '../components/ProductsTable';
import styled from 'styled-components';
import CardList from '../components/CardList';
import CartCard from '../components/CartCard';
import LaptopShoppingCart from '../components/ShoppingCart';

function Sample() {
  return (
    <Bg>
      {/* <SideNav />
      <CardList /> */}
      {/* <UsersTable /> */}
      {/* <ProductsTable /> */}
      <LaptopShoppingCart />
      <CartCard />
    </Bg>
  )
}

export default Sample

const Bg = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* background: #1F2937; */
`