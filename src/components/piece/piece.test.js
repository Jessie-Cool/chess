import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Piece from './Piece';

describe('<Piece />', () => {
  test('it should mount', () => {
    render(<Piece />);

    const piece = screen.getByTestId('Piece');

    expect(piece).toBeInTheDocument();
  });
});
