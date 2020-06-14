import React, { useState } from 'react';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

// Styled Components
import { StyledTetris } from './styles/StyledTetris';
import { StyledTetrisWrapper } from './styles/StyledTetrisWrapper';

//Hooks
import { usePlayer } from './../hooks/usePlayer';
import { useStage } from './../hooks/useStage';

const Tetris = ({ type }) => {
	console.log(useStage());
	console.log('re-render');

	const [dropTime, setDroptime] = useState(null);
	const [gameOver, setGameOver] = useState(false);

	const [player] = usePlayer();
	const [stage, setStage] = useStage(player);

	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={stage()} />
				<aside>
					{gameOver ? (
						<Display gameOver={gameOver} text="Game Over" />
					) : (
							<div>
								<Display text="Score" />
								<Display text="Rows" />
								<Display text="Level" />
							</div>
						)}
					<StartButton />
				</aside>
			</StyledTetris>
		</StyledTetrisWrapper>
	)
}

export default Tetris;