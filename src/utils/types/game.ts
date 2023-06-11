type Option = 'X' | 'O' | '';

export type Options = Option[];

export interface User {
    userName: string;
    socketId: string;
}

export interface Room {
    id: string;
    host: User;
    users: User[];
    gameState: Options;
    winner: string | undefined;
    draw: boolean;
    turn: {
        user: User;
        item: Option;
    };
}

export interface ServerToClientEvents {
    play_client: (room: Room) => void;
    join_room_client: (room: Room) => void;
}

export interface ClientToServerEvents {
    join_room: (e: { user: User; roomId: string }) => void;
    play: (e: { roomId: string; gameState: Options }) => void;
}
