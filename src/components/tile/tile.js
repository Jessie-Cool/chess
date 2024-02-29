import React from 'react';
import PropTypes from 'prop-types';
import { TileWrapper } from './tile.styled';
import './tile.css';

function Tile(props) {
  const {
    x,
    y,
    pieceId,
    selected,
    handleTileClick,
  } = props;

  return (
    <TileWrapper
      data-testid="Tile"
      className={selected ? 'selected' : ''}
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
