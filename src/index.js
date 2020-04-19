import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import './index.css';

const StarMatch = () => {
  const [gameId, setGameId] = useState(1);
  // unmount the previous game, clear side effects and mount a new game
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />
}

ReactDOM.render(<StarMatch />, document.getElementById('root'));

