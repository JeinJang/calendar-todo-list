import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import Calendar from '../components/Calendar';
import Todos from '../components/Todos';

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;


const MainPage = () => {
  return (
    <>
      <Head>
        <title>todo list</title>
      </Head>
      <Container>
        <Calendar />
        <Todos />
      </Container>
    </>
  );
};

export default MainPage;
