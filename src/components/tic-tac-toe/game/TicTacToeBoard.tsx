import { BoardState, Player } from "@/pages/tic-tac-toe";
import { IconContext } from "react-icons";
import TicTacToeCell from "./TicTacToeCell";

type Inputs = {
  index: number;
  players: Player[];
  state: BoardState;
  disabled: boolean;
  onCellClick: (boardIndex: number, cellIndex: number) => void;
};

export default function TicTacToeBoard(inputs: Inputs) {
  const renderIcon = () => {
    if (inputs.state.winner) {
      let winningPlayer = inputs.players[inputs.state.winner - 1];
      return (
        <div
          className={`absolute w-full h-full flex justify-center items-center`}
          style={{ background: `${winningPlayer.color}40` }}
        >
          <IconContext.Provider
            value={{
              color: winningPlayer.color,
              size: "10rem",
            }}
          >
            <winningPlayer.icon.icon />
          </IconContext.Provider>
        </div>
      );
    }

    return <></>;
  };

  const renderCells = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <TicTacToeCell
        index={i}
        players={inputs.players}
        state={inputs.state.cells[i]}
        disabled={inputs.disabled}
        onClick={() => inputs.onCellClick(inputs.index, i)}
      />
    ));
  };

  return (
    <div
      className={`transition relative grid grid-cols-3 border border-smoky/25 ${
        inputs.disabled ? "bg-smoky/40" : ""
      }`}
    >
      {renderIcon()}
      {renderCells()}
    </div>
  );
}
