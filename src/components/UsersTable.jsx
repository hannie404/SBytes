import React from 'react';
import styled from 'styled-components';
import { MDBContainer, MDBDataTable } from 'mdbreact';

function generateUser() {
  const firstNames = ['Annie', 'John', 'Emma', 'Michael', 'Olivia', 'Daniel', 'Sophia', 'William', 'Ava', 'James'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Lee', 'Kim', 'Wilson', 'Anderson', 'Clark', 'Garcia'];
  const genders = ['Male', 'Female', 'Non-binary'];
  const cities = ['Tokyo', 'New York', 'London', 'Paris', 'Sydney', 'Berlin', 'Beijing', 'Mumbai', 'Rio de Janeiro', 'Cairo'];
  const birthYears = Array.from({ length: 50 }, () => Math.floor(Math.random() * 50) + 1950); // Random birth years from 1950 to 1999
  const users = [];

  for (let i = 0; i < 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`;
    const address = `${cities[Math.floor(Math.random() * cities.length)]}`;
    const contactNumber = '09' + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    const birthYear = birthYears[i];
    const birthMonth = Math.floor(Math.random() * 12) + 1;
    const birthDay = Math.floor(Math.random() * 28) + 1; 

    const birthDate = `${birthMonth.toString().padStart(2, '0')}/${birthDay.toString().padStart(2, '0')}/${birthYear}`;
    const gender = genders[Math.floor(Math.random() * genders.length)];

    users.push({
      firstName,
      lastName,
      email,
      address,
      contactNumber,
      birthDate,
      gender,
    });
  }

  return users;
}

const UsersTable = () => {
  const users = generateUser();

  const data = {
    columns: [
      {
        label: 'First Name',
        field: 'firstName',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lastName',
        sort: 'asc',
        width: 270
      },
      {
        label: 'Email',
        field: 'email',
        sort: 'asc',
        width: 200
      },
      {
        label: 'Address',
        field: 'address',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Contact Number',
        field: 'contactNumber',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Birth Date',
        field: 'birthDate',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 150
      },
    ],
    rows: users,
    // [
    //   {
    //     firstName: 'Annie',
    //     lastName: 'Nesh',
    //     email: 'annie.nesh@gmail.com',
    //     address: 'Tokyo Japan',
    //     contactNumber: '09123456789',
    //     birthDate: '10/04/03',
    //     gender: 'Female',
    //   },
    //   {
    //     "firstName": "John",
    //     "lastName": "Doe",
    //     "email": "john.doe@example.com",
    //     "address": "New York, USA",
    //     "contactNumber": "1234567890",
    //     "birthDate": "05/20/90",
    //     "gender": "Male"
    //   },
    // ]
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

export default UsersTable;

const Table = styled(MDBDataTable)`
  background: #fff;

  .custom-select{
    margin-left: 0% !important;
    margin-bottom: 1rem;
  }
`;