import { GameService } from './gameServiceDomain';
import { possibleWinsIndex } from '../../../utils/consts/game';

const gameService: GameService = {
    verifyWinner(options, currentTurn) {
        return possibleWinsIndex.some((possible) => {
            return possible.every((value) => options[value] === currentTurn);
        });
    },
    verifyGotOld(options) {
        return options.every((option) => {
            return option.length > 0;
        });
    },
    getComputerTurnIndex(options) {
        let index = -1;

        const currentGameIndexes = possibleWinsIndex.map((possibility) => {
            return possibility.reduce(
                (cases, currentValue) => {
                    const currentCases = { ...cases };

                    switch (options[currentValue]) {
                        case 'X':
                            currentCases.player = cases.player + 1;
                            break;
                        case 'O':
                            currentCases.cpu = cases.cpu + 1;
                            break;
                        default:
                            currentCases.empty = cases.empty + 1;
                            break;
                    }

                    return currentCases;
                },
                {
                    empty: 0,
                    player: 0,
                    cpu: 0,
                    possibility,
                },
            );
        });

        const cpuPossibleWin = currentGameIndexes.find((curGame) => curGame.cpu === 2 && curGame.empty > 0);

        let playerPossibleWin;
        if (!cpuPossibleWin) {
            playerPossibleWin = currentGameIndexes.find((curGame) => curGame.player === 2 && curGame.empty > 0);

            if (playerPossibleWin) {
                playerPossibleWin.possibility.forEach((optionIndex) => {
                    if (!options[optionIndex]) {
                        index = optionIndex;
                    }
                });
            }
        } else {
            cpuPossibleWin.possibility.forEach((optionIndex) => {
                if (!options[optionIndex]) {
                    index = optionIndex;
                }
            });
        }

        if (index < 0) {
            const cpuWithOneOption = currentGameIndexes.filter((curGame) => curGame.cpu === 1 && curGame.empty > 0);
            const randomIndexWithCpuOptions = Math.floor(Math.random() * cpuWithOneOption.length);
            const cpuOneOptionToUse = cpuWithOneOption[randomIndexWithCpuOptions];

            if (cpuOneOptionToUse) {
                while (index < 0) {
                    const randomIndex = Math.floor(Math.random() * cpuOneOptionToUse.possibility.length);
                    if (!options[randomIndex]) {
                        index = randomIndex;
                    }
                }
            } else {
                const randomIndex = Math.floor(Math.random() * options.length);
                if (!options[randomIndex]) {
                    index = randomIndex;
                }
            }
        }

        return index;
    },
};

export default gameService;
