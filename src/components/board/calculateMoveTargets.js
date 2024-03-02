const moveFunctionObject = {
  1: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
  2: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
  3: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
  4: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
  5: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
  6: (selectedPiece, currentPiece, boardState) => {
    const [x, y] = selectedPiece;
    return {
      [x + 1]: [y + 1],
    };
  },
};

export default (stateObject) => {
  const {
    boardState,
    selectedPiece,
  } = stateObject;

  const [x, y] = selectedPiece;
  const currentPiece = boardState[x][y];

  return moveFunctionObject[currentPiece.id](selectedPiece, currentPiece, boardState);
};
