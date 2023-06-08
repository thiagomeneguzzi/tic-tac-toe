import { GameServiceImpl } from "./gameServiceImplDomain";
import gameService from "../../base/gameService/gameService";

const gameServiceImpl: GameServiceImpl = {
	verifyWinner(options, currentTurn) {
		return gameService.verifyWinner(options, currentTurn);
	},
	verifyGotOld(options) {
		return gameService.verifyGotOld(options);
	},
}

export default gameServiceImpl;
