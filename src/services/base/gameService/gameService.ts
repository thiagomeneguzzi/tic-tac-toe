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
        let index;

        const teste = possibleWinsIndex.map((possibility) => {
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

        while (!index) {
            const randomIndex = Math.floor(Math.random() * options.length);
            if (!options[randomIndex]) {
                index = randomIndex;
            }
        }

        return index;
    },
};

export default gameService;
