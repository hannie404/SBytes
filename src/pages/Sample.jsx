import React from 'react';
import SideNav from '../components/SideNav';
import UsersTable from '../components/UsersTable';
import ProductsTable from '../components/ProductsTable';
import styled from 'styled-components';

function Sample() {
  return (
    <Bg>
      <SideNav />
      <UsersTable />
      <ProductsTable />
    </Bg>
  )
}

export default Sample

const Bg = styled.div`
  background: #1F2937;
  height: 100vh;
`