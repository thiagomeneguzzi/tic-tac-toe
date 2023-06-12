import { Language } from '../LanguageDomain';

const enUSWords: Language['words'] = {
    gameMode: {
        gameTitle: 'Tic Tac Toe',
        selectGameMode: 'Select the game mode',
        localSinglePlayer: '1 Player',
        localMultiplayer: '2 Players',
        multiplayer: 'Online - Alpha',
    },
    game: {
        reset: 'Reset',
        draw: "It's draw!",
    },
    localMultiplayerGame: {
        victory: 'Congrats player 1#, you won!',
    },
    localSinglePlayerGame: {
        victory: 'Wow, congrats you won!',
        lose: 'Ops, you lost!',
        waitingCpu: 'Waiting computer...',
    },
    multiplayer: {
        name: 'Insert your name',
        room: "Insert room's name",
        enterRoom: 'Enter room',
    },
};

export default enUSWords;
