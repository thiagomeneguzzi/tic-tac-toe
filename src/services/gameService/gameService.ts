import { GameService } from "./gameServiceDomain";
import { possibleWinsIndex } from "../../utils/consts/game";

const gameService: GameService = {
	verifyWinner(options, currentTurn) {
		return possibleWinsIndex.some((possible) => {
			return possible.every((value) => options[value] === currentTurn)
		})
	},
	verifyGotOld(options) {
		return options.every((option) => {
			return option.length > 0;
		})
	},
}

export default gameService;
