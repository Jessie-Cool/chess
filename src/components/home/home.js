import React from 'react';
import PropTypes from 'prop-types';
import { HomeWrapper } from './home.styled';
import Board from '../board/board';

function Home() {
  return (
    <HomeWrapper data-testid="Home">
      <Board />
    </HomeWrapper>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
