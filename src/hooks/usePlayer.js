import { useState } from 'react';
import { randomTetromino } from '../tetrominos';

export const usePlayer = () => {

  // This is where I need it working
  console.log(randomTetromino());

  const [player, setPlayer] = useState({
    pos: { x: 0, y: 0 },
    //tetromino: randomTetromino().shape,
    collided: false,
  })

  return [player];
}