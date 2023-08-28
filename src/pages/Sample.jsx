import React from 'react';
import SideNav from '../components/SideNav';
import UsersTable from '../components/UsersTable';
import ProductsTable from '../components/ProductsTable';
import styled from 'styled-components';
import CardList from '../components/CardList';
import CartCard from '../components/CartCard';

function Sample() {
  return (
    <Bg>
      {/* <SideNav />
      <CardList /> */}
      {/* <UsersTable /> */}
      {/* <ProductsTable /> */}
      <CartCard />
    </Bg>
  )
}

export default Sample

const Bg = styled.div`
  /* background: #1F2937; */
`