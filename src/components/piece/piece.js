import React from 'react';
import PropTypes from 'prop-types';
import { PieceWrapper } from './piece.styled';

function Piece() {
  return (
    <PieceWrapper data-testid="Piece">
      Piece Component
    </PieceWrapper>
  );
}

Piece.propTypes = {};

Piece.defaultProps = {};

export default Piece;
