import React from 'react';
import SideNav from '../../components/SideNav';
import UsersTable from '../../components/UsersTable';
import ProductsTable from '../../components/ProductsTable';

function Admin() {
  return (
    <>
      <SideNav />
      <UsersTable />
      <ProductsTable />
    </>
  )
}

export default Admin