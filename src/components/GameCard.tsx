import React from 'react';
import styles from './GameCard.module.css';

type Props = {
	value: 'X' | 'O' | '';
	onClick: () => void;
}

const GameCard = ({value, onClick}: Props): JSX.Element => {
	return (
		<>
			<div className={styles.card} onClick={onClick}>
				<span className={value === 'X' ? styles.optionX : styles.optionO}>{value}</span>
			</div>
		</>
	)
}

export default GameCard;