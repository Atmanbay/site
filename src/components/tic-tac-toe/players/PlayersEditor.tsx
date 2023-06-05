import { Icon, Player } from "@/pages/tic-tac-toe";
import PlayerEditor from "./PlayerEditor";

type Inputs = {
  players: Player[];
  setPlayers: (players: Player[]) => void;
  icons: Icon[];
};

export default function PlayersEditor(inputs: Inputs) {
  const updatePlayer = (player: Player) => {
    let tempPlayers = [...inputs.players];
    tempPlayers[player.id - 1] = player;
    inputs.setPlayers(tempPlayers);
  };

  return (
    <div className="grid grid-cols-2 gap-4">
      <PlayerEditor
        player={inputs.players[0]}
        updatePlayer={updatePlayer}
        icons={inputs.icons}
      />
      <PlayerEditor
        player={inputs.players[1]}
        updatePlayer={updatePlayer}
        icons={inputs.icons}
      />
    </div>
  );
}
