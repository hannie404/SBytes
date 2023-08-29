import React from 'react';
import styled from 'styled-components';
import HomeRoutes from './pages/HomeRoutes';
import { Spiral } from './assets';

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
  background: #fff
`;
