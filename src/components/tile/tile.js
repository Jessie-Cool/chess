import React from 'react';
import { TileWrapper } from './tile.styled';
import './tile.css';

function Tile(props) {
  const {
    x,
    y,
    pieceId,
    selected,
    handleTileClick,
    moveTarget
  } = props;

  return (
    <TileWrapper
      data-testid="Tile"
      className={`${selected ? 'selected' : ''} ${moveTarget ? 'move-target' : ''}`}
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
