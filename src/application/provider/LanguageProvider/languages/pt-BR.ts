import { Language } from '../LanguageDomain';

const ptBRWords: Language['words'] = {
    gameMode: {
        gameTitle: 'Jogo da velha',
        selectGameMode: 'Selecione o modo de jogo',
        localSinglePlayer: '1 Jogador',
        localMultiplayer: '2 Jogadores',
        multiplayer: 'Online - Alfa',
    },
    game: {
        reset: 'Reiniciar',
        draw: 'Deu velha!',
    },
    localMultiplayerGame: {
        victory: 'Parabéns jogador 1#, você ganhou!',
    },
    localSinglePlayerGame: {
        victory: 'Uau, parabéns você ganhou!',
        lose: 'Ops, você perdeu!',
        waitingCpu: 'Aguardando computador...',
    },
    multiplayer: {
        name: 'Insira seu nome',
        room: 'Insira o nome da sala',
        enterRoom: 'Entrar na sala',
    },
};

export default ptBRWords;
