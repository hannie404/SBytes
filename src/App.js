import React from 'react';
import Form from './components/Form';
import Navigation from './components/Navigation';
import styled from 'styled-components';


function App() {
  return (
    <SBytesBG>
      <Navigation />
      <Form />
    </SBytesBG>  
  );
}

export default App;

const SBytesBG = styled.div`
  background: #1F2937;
`;
