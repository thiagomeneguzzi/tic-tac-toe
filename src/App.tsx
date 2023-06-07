import { useState } from 'react'

import GameCard from "./components/GameCard";

import gameService from "./services/gameService/gameService";

import { initialValue } from "./utils/consts/game";
import { Options } from "./utils/types/game";

import styles from './App.module.css'

const App = ():JSX.Element => {
    const [gameStateOptions, setGameStateOptions] = useState<Options>(initialValue)
    const [turnOption, setTurnOption] = useState<'X' | 'O'>('X');

    const [winner, setWinner] = useState<'X' | 'O'>();
    const [gotOld, setGotOld] = useState<boolean>(false);

    const handleOptionMark = (index: number): void => {
        const tempOptions = [...gameStateOptions];

        if (tempOptions[index] !== '') {
            return;
        }

        tempOptions[index] = turnOption;
        setGameStateOptions(tempOptions);

        const hasWinner = gameService.verifyWinner(tempOptions, turnOption);

        if (hasWinner) {
            setWinner(turnOption);
        } else {
            const endGame = gameService.verifyGotOld(tempOptions);

            if (endGame) {
                setGotOld(true);
            } else {
                setTurnOption((prevState) => prevState === 'X' ? 'O' : 'X')
            }
        }

    }

    const resetGame = (): void => {
        setWinner(undefined);
        setGameStateOptions(initialValue);
        setTurnOption('X');
        setGotOld(false);
    }

    return (
        <div className={styles.container}>
            {
                winner && <h1>O vencedor foi o Jogador {winner}</h1>
            }
            {
                gotOld && <h1>Deu velha!</h1>
            }
            {
                (winner || gotOld) && <button className={styles.resetBtn} onClick={resetGame}>Reiniciar</button>
            }
            <div className={styles.containerGame}>
                {gameStateOptions.map((option, index) => (
                    <GameCard value={option} onClick={() => handleOptionMark(index)} />
                ))}
            </div>
        </div>
    )
}

export default App
