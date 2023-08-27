import React from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import HomeRoutes from './pages/HomeRoutes';

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000/";

function App() {
  return (
    <SBytesBG>
      <HomeRoutes />
    </SBytesBG>  
  );
}

export default App;

const SBytesBG = styled.div`
  background: #fff;
`;
