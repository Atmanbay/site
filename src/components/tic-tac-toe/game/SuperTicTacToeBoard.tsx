import { GameState, Player } from "@/pages/tic-tac-toe";
import TicTacToeBoard from "./TicTacToeBoard";

type Inputs = {
  players: Player[];

  state: GameState;
  eligibleBoards: number[];
  onCellClick: (boardIndex: number, cellIndex: number) => void;
};

export default function SuperTicTacToeBoard(inputs: Inputs) {
  const renderBoards = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <TicTacToeBoard
        key={`board_${i}`}
        index={i}
        players={inputs.players}
        state={inputs.state.boards[i]}
        disabled={!inputs.eligibleBoards.includes(i)}
        onCellClick={inputs.onCellClick}
      />
    ));
  };

  return <div className="grid grid-cols-3 gap-3">{renderBoards()}</div>;
}
