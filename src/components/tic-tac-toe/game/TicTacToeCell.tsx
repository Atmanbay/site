import { CellState, Player } from "@/pages/tic-tac-toe";
import { IconContext } from "react-icons";

type Inputs = {
  index: number;
  players: Player[];
  state: CellState;
  disabled: boolean;
  onClick: () => void;
};

export default function TicTacToeCell(inputs: Inputs) {
  const getClassName = (index: number) => {
    let baseClass =
      "border-smoky w-[64px] h-[64px] flex justify-center items-center";

    if (!inputs.state.winner && !inputs.disabled) {
      baseClass += " cursor-pointer";
    }

    switch (index) {
      case 0:
        return baseClass + " border-b border-r";
      case 1:
        return baseClass + " border-l border-b border-r";
      case 2:
        return baseClass + " border-l border-b";
      case 3:
        return baseClass + " border-t border-r border-b";
      case 4:
        return baseClass + " border";
      case 5:
        return baseClass + " border-t border-l border-b";
      case 6:
        return baseClass + " border-t border-r";
      case 7:
        return baseClass + " border-l border-t border-r";
      case 8:
        return baseClass + " border-l border-t";
    }
  };

  const renderIcon = () => {
    if (inputs.state.winner) {
      let winningPlayer = inputs.players[inputs.state.winner - 1];
      return (
        <IconContext.Provider
          value={{ color: winningPlayer.color, size: "3.5rem" }}
        >
          <winningPlayer.icon.icon />
        </IconContext.Provider>
      );
    }

    return <></>;
  };

  return (
    <div
      key={`cell_${inputs.index}`}
      className={getClassName(inputs.index)}
      onClick={() =>
        !inputs.disabled && !inputs.state.winner && inputs.onClick()
      }
    >
      {renderIcon()}
    </div>
  );
}
