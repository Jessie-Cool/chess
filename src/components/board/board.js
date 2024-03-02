import React, { useState } from 'react';
import { BoardWrapper } from './board.styled';
import Tile from '../tile/tile';
import boardDefaultState from '../../constants/boardDefaultState';
import handleBoradClick from './handleclick';

function Board() {
  const [boardState, setBoardState] = useState(boardDefaultState);
  const [selectedPiece, setSelectedPiece] = useState([0, 0]);
  // TODO set status to enum over string
  const [turnStatus, setTurnStatus] = useState({
    team: 'white',
    phase: 'select',
  });

  const stateObj = {
    //state
    boardState,
    turnStatus,
    //setters
    setTurnStatus,
    setSelectedPiece,
  };

  const handleBoradClickWrapper = (coords) => (handleBoradClick(coords, stateObj));

  const renderBoard = () => {
    const board = [];
    for (let x = 0; x < 8; x++) {
      const row = [];
      for (let y = 0; y < 8; y++) {
        const [selectedX, selectedY] = selectedPiece;
        let selected = false;
        if (selectedX === x && selectedY === y) {
          selected = true;
        }

        const pieceId = boardState[x][y].id;
        row.push(<Tile
          x={x}
          y={y}
          pieceId={pieceId}
          selected={selected}
          handleTileClick={handleBoradClickWrapper}
        />);
      }
      board.push(
        <div className="row-wrapper">
          {row}
        </div>,
      );
    }
    return board;
  };

  return (
    <BoardWrapper data-testid="Board">
      <div className="board-wrapper">
        {
         renderBoard()
      }
      </div>
    </BoardWrapper>
  );
}

Board.propTypes = {};

Board.defaultProps = {};

export default Board;
