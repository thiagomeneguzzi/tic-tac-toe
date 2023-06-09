import { GameService } from '../../base/gameService/gameServiceDomain';

export type GameServiceImpl = {
    verifyWinner: GameService['verifyWinner'];
    verifyGotOld: GameService['verifyGotOld'];
    getComputerTurnIndex: GameService['getComputerTurnIndex'];
};
