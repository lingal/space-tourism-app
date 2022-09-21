import React from 'react';
import { Header } from '../components';
import { Outlet } from 'react-router-dom';
import { Wrapper } from '../components/styles/SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

export default SharedLayout;
