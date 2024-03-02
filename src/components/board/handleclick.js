const defaultPieceValues = {
  team: 'none',
};

export default (coords, stateObj) => {
  const [x, y] = coords;
  const {
    boardState,
    turnStatus,
    setSelectedPiece,
    setTurnStatus,
  } = stateObj;
  const piece = {
    ...defaultPieceValues,
    ...boardState[x][y],
  };

  // select of same team
  if (turnStatus.team === piece.team && (turnStatus.phase === 'move' || turnStatus.phase === 'select')) {
    setSelectedPiece(coords);
    setTurnStatus({
      ...turnStatus,
      phase: 'move',
    });
  }
  // select of opposite team
  if (turnStatus.team !== piece.team && turnStatus.phase === 'move') {
    console.log('not your team');
  }
  // select of empty space
  if (turnStatus.team !== piece.team && turnStatus.phase === 'move') {
    console.log('empty space');
  }
};
