import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';
import Calendar from '../components/Calendar';
import Todos from '../components/Todos';
import TodoListContainer from '../contexts/TodoListContext';

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
      <TodoListContainer>
        <Container>
          <Calendar />
          <Todos />
        </Container>
      </TodoListContainer>
    </>
  );
};

export default MainPage;
