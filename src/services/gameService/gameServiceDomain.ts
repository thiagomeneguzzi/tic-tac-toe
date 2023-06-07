import { Options } from "../../utils/types/game";

export type GameService = {
	verifyWinner: (options: Options, currentTurn: Options[0]) => boolean;
	verifyGotOld: (options: Options) => boolean;
}
