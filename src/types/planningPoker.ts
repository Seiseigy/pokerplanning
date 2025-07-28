export type Player = {
  id: string;
  name: string;
  vote: number | null;
};

export const GameStates = {
  LOBBY: "lobby",
  VOTING: "voting",
  REVEALING: "revealing",
  FINISHED: "finished",
} as const;

export type GameState = (typeof GameStates)[keyof typeof GameStates];

export type Game = {
  id: string;
  name: string;
  state: GameState;
  players: Player[];
  votes: Record<string, number | null>; // Maps player ID to their vote
};

export function getPlayerVotes(game: Game): Record<string, number | null> {
  return game.players.reduce(
    (acc, player) => {
      acc[player.id] = player.vote;
      return acc;
    },
    {} as Record<string, number | null>
  );
}
