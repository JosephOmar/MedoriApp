import React from 'react';
import NavbarBottom from '../../components/NavbarBottom';
import { CarritoProvider } from './CarritoContext';

const MainScreen = () => {
  return (   
      <CarritoProvider>
      <NavbarBottom />
      </CarritoProvider>
  );
};

export default MainScreen;