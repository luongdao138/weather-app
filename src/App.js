import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Left from './components/Left';
import Right from './components/Right';
// import { searchLocation } from './features/reducers/locationSlice';
import GlobalStyle from './GlobalStyle';

const App = () => {
  const [isOpenSearchForm, setIsOpenSearchForm] = useState(false);

  const closeSearchForm = () => setIsOpenSearchForm(false);
  const openSearchForm = () => setIsOpenSearchForm(true);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(searchLocation({ query: 'san' }));
  // }, []);

  return (
    <>
      <Wrapper>
        <Left
          isOpenSearchForm={isOpenSearchForm}
          closeSearchForm={closeSearchForm}
          openSearchForm={openSearchForm}
        />
        <Right />
      </Wrapper>
      <GlobalStyle />
    </>
  );
};

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;

  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export default App;
