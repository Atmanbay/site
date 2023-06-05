import SuperTicTacToeBoard from "@/components/tic-tac-toe/game/SuperTicTacToeBoard";
import PlayersEditor from "@/components/tic-tac-toe/players/PlayersEditor";
import { cloneDeep } from "lodash";
import { useState } from "react";
import { IconContext, IconType } from "react-icons";
import {
  FiCircle,
  FiDribbble,
  FiEye,
  FiFrown,
  FiGift,
  FiHeart,
  FiMeh,
  FiSmile,
  FiX,
} from "react-icons/fi";

export type Icon = {
  id: number;
  name: string;
  icon: IconType;
};

export type Player = {
  id: number;
  name: string;
  icon: Icon;
  color: string;
};

export type CellState = {
  winner?: number;
};

export type BoardState = {
  winner?: number;
  isTied?: boolean;
  cells: { [key: number]: CellState };
};

export type GameState = {
  winner?: number;
  isTied?: boolean;
  boards: { [key: number]: BoardState };
};

export type Move = {
  board: number;
  cell: number;
  player: number;
  eligibleBoards: number[];
};

const icons: Icon[] = [
  {
    id: 0,
    name: "X",
    icon: FiX,
  },
  {
    id: 1,
    name: "O",
    icon: FiCircle,
  },
  {
    id: 2,
    name: "Basketball",
    icon: FiDribbble,
  },
  {
    id: 3,
    name: "Eye",
    icon: FiEye,
  },
  {
    id: 4,
    name: "Gift",
    icon: FiGift,
  },
  {
    id: 5,
    name: "Heart",
    icon: FiHeart,
  },
  {
    id: 6,
    name: "Smile",
    icon: FiSmile,
  },
  {
    id: 7,
    name: "Meh",
    icon: FiMeh,
  },
  {
    id: 8,
    name: "Frown",
    icon: FiFrown,
  },
];
const winningIndexCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

const defaultPlayers: Player[] = [
  {
    id: 1,
    name: "Andrew",
    icon: icons[0],
    color: "#c62828",
  },
  {
    id: 2,
    name: "Opponent",
    icon: icons[1],
    color: "#1565c0",
  },
];
const defaultEligibleBoards: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const defaultState: GameState = {
  boards: {
    0: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    1: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    2: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    3: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    4: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    5: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    6: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    7: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
    8: {
      cells: {
        0: {},
        1: {},
        2: {},
        3: {},
        4: {},
        5: {},
        6: {},
        7: {},
        8: {},
      },
    },
  },
};

export default function TicTacToe() {
  const [currentPlayer, setCurrentPlayer] = useState<number>(1);
  const [state, setState] = useState<GameState>(cloneDeep(defaultState));
  const [players, setPlayers] = useState<Player[]>(cloneDeep(defaultPlayers));
  const [eligibleBoards, setEligibleBoards] = useState<number[]>(
    cloneDeep(defaultEligibleBoards)
  );
  const [moves, setMoves] = useState<Move[]>([]);

  const isBoardWinner = (boardIndex: number) => {
    let board = state.boards[boardIndex];
    for (let i = 0; i < winningIndexCombos.length; i++) {
      let combo = winningIndexCombos[i];
      if (
        board.cells[combo[0]].winner &&
        board.cells[combo[0]].winner === board.cells[combo[1]].winner &&
        board.cells[combo[1]].winner === board.cells[combo[2]].winner
      ) {
        return true;
      }
    }
  };

  const isBoardTied = (boardIndex: number) => {
    let board = state.boards[boardIndex];
    if (board.winner) {
      return false;
    }

    let unclaimedCells = Object.values(board.cells).filter((c) => !c.winner);
    return unclaimedCells.length === 0;
  };

  const isGameWinner = () => {
    for (let i = 0; i < winningIndexCombos.length; i++) {
      let combo = winningIndexCombos[i];
      if (
        state.boards[combo[0]].winner &&
        state.boards[combo[0]].winner === state.boards[combo[1]].winner &&
        state.boards[combo[1]].winner === state.boards[combo[2]].winner
      ) {
        return true;
      }
    }
  };

  const isGameTied = () => {
    if (state.winner) {
      return false;
    }

    let unclaimedBoards = Object.values(state.boards).filter(
      (b) => !b.winner && !b.isTied
    );
    return unclaimedBoards.length === 0;
  };

  const onCellClick = (boardIndex: number, cellIndex: number) => {
    let tempMoves = [...moves];
    tempMoves.push({
      board: boardIndex,
      cell: cellIndex,
      player: currentPlayer,
      eligibleBoards: [...eligibleBoards],
    });
    setMoves(tempMoves);

    let tempState = { ...state };
    tempState.boards[boardIndex].cells[cellIndex] = {
      winner: currentPlayer,
    };

    if (isBoardWinner(boardIndex)) {
      tempState.boards[boardIndex].winner = currentPlayer;
    }

    if (isBoardTied(boardIndex)) {
      tempState.boards[boardIndex].isTied = true;
    }

    if (isGameWinner()) {
      tempState.winner = currentPlayer;
      setState(tempState);
      setEligibleBoards([]);
      return;
    }

    if (isGameTied()) {
      tempState.isTied = true;
      setState(tempState);
      setEligibleBoards([]);
      return;
    }

    if (
      tempState.boards[cellIndex].winner ||
      tempState.boards[cellIndex].isTied
    ) {
      let nonwinners: number[] = [];
      for (let i = 0; i < Object.keys(tempState.boards).length; i++) {
        let board = tempState.boards[i];
        if (!board.winner && !board.isTied) {
          nonwinners.push(i);
        }
      }
      setEligibleBoards(nonwinners);
    } else {
      setEligibleBoards([cellIndex]);
    }

    setState(tempState);

    if (currentPlayer == 1) {
      setCurrentPlayer(2);
    } else {
      setCurrentPlayer(1);
    }
  };

  const renderMessage = () => {
    let player: Player | null;
    let message: string;
    if (state.winner) {
      player = players[state.winner - 1];
      message = `${player.name} won!`;
    } else if (state.isTied) {
      player = null;
      message = "Tie!";
    } else {
      player = players[currentPlayer - 1];
      message = `${player.name}'s turn`;
    }

    return (
      <div className="flex flex-row justify-center items-center gap-2">
        {player && (
          <div>
            <IconContext.Provider
              value={{
                color: player.color,
                size: "2rem",
              }}
            >
              <player.icon.icon />
            </IconContext.Provider>
          </div>
        )}
        <div>{message}</div>
      </div>
    );
  };

  const undo = () => {
    let tempMoves = [...moves];
    let lastMove = tempMoves.pop();

    if (!lastMove) {
      return;
    }

    let tempState = { ...state };
    delete tempState.boards[lastMove.board].cells[lastMove.cell].winner;
    delete tempState.boards[lastMove.board].winner;
    delete tempState.boards[lastMove.board].isTied;
    delete tempState.winner;
    delete tempState.isTied;
    setEligibleBoards(lastMove.eligibleBoards);

    setState(tempState);
    setMoves(tempMoves);
    setCurrentPlayer(lastMove.player);
  };

  const reset = () => {
    setState(cloneDeep(defaultState));
    setCurrentPlayer(1);
    setEligibleBoards(cloneDeep(defaultEligibleBoards));
    setMoves([]);
  };

  return (
    <div className="h-screen max-w-[606px] flex flex-col justify-center items-center gap-4 self-center">
      <div className="w-full flex flex-row gap-4 justify-between items-center">
        <div className="text-2xl">{renderMessage()}</div>
        <div className="flex flex-row gap-1">
          <div>
            <button
              className="rounded-md bg-umber px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-umber/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umber/50 disabled:opacity-30 disabled:hover:bg-umber"
              onClick={undo}
              disabled={moves.length == 0}
            >
              Undo
            </button>
          </div>
          <div>
            <button
              className="rounded-md bg-umber px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-umber/75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-umber/50 disabled:opacity-30 disabled:hover:bg-umber"
              onClick={reset}
              disabled={moves.length == 0}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
      <SuperTicTacToeBoard
        players={players}
        state={state}
        eligibleBoards={eligibleBoards}
        onCellClick={onCellClick}
      />
      <PlayersEditor players={players} setPlayers={setPlayers} icons={icons} />
    </div>
  );
}
