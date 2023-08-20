import React from 'react';
import Form from './components/Form';
import styled from 'styled-components';
import HomeRoutes from './pages/HomeRoutes';


function App() {
  return (
    <SBytesBG>
      <HomeRoutes />
    </SBytesBG>  
  );
}

export default App;

const SBytesBG = styled.div`
  background: #1F2937;
`;
