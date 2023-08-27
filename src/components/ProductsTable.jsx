import React from 'react';
import styled from 'styled-components';
import { MDBDataTable, MDBContainer } from 'mdbreact';

const ProductsTable = () => {
  const data = {
    columns: [
      {
        label: 'ProductSeriesName',
        field: 'ProductSeriesName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'ProductModel',
        field: 'ProductModel',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Stock',
        field: 'Stock',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Price',
        field: 'Price',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ImageUrl',
        field: 'ImageUrl',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Cpu',
        field: 'Cpu',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Memory',
        field: 'Memory',
        sort: 'asc',
        width: 100
      },
      {
        label: 'IntegratedGfx',
        field: 'IntegratedGfx',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Storage',
        field: 'Storage',
        sort: 'asc',
        width: 100
      },
      {
        label: 'ScreenSize',
        field: 'ScreenSize',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Resolution',
        field: 'Resolution',
        sort: 'asc',
        width: 100
      },
      {
        label: 'RefreshRate',
        field: 'RefreshRate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Color',
        field: 'Color',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Battery',
        field: 'Battery',
        sort: 'asc',
        width: 100
      },
      {
        label: 'OperatingSystem',
        field: 'OperatingSystem',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Package',
        field: 'Package',
        sort: 'asc',
        width: 100
      },
    ],
    rows: [
      {
        ProductSeriesName: 'Swift Go 14',
        ProductModel: 'SFG14-71-54AP',
        Stock: '5',
        Price: '48299',
        ImageUrl: 'https://images.acer.com/is/image/acer/acer-endurot1-et11031w_wp_win10_01?$Series-Component-XL$',
        Cpu: 'Intel Core i5-1335U (13th Gen)',
        Memory: '16 GB',
        IntegratedGfx: 'Intel Iris Xe Max Graphics',
        Storage: '1 x 512 GB M.2 NVMe PCIe',
        ScreenSize: '14',
        Resolution: '2240 x 1400',
        RefreshRate: '60 Hz',
        Color: 'Pure Silver',
        Battery: 'Lithium-Ion',
        OperatingSystem: 'Windows 11 Home',
        Package: 'Product, charger, Wired Mouse',
      },
    ]
  };

  return (
    <MDBContainer>
      <Table
      striped
      bordered
      small
      data={data}
    />
    </MDBContainer>
    
  );
}

export default ProductsTable;

const Table = styled(MDBDataTable)`
  background: #fff;

  .custom-select{
    margin-left: 0% !important;
    margin-bottom: 1rem;
  }
`;