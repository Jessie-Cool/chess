import React from 'react';
import PropTypes from 'prop-types';
import { TileWrapper } from './tile.styled';

function Tile(props) {
  const {
    x,
    y,
    selected,
    handleTileClick,
  } = props;

  console.log(boardState);
  const pieceId = x !== undefined && y !== undefined ? boardState[x + 1][y + 1] : 0;
  return (
    <TileWrapper
      data-testid="Tile"
      onClick={() => {
        handleTileClick([x, y]);
      }}
    >
      {pieceId}
    </TileWrapper>
  );
}

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
