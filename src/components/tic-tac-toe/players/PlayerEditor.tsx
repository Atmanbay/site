import { Icon, Player } from "@/pages/tic-tac-toe";
import { useState } from "react";
import { SketchPicker } from "react-color";
import IconPicker from "./IconPicker";

type Inputs = {
  player: Player;
  updatePlayer: (player: Player) => void;
  icons: Icon[];
};

export default function PlayerEditor(inputs: Inputs) {
  const [name, _setName] = useState<string>(inputs.player.name);
  const [icon, _setIcon] = useState<Icon>(inputs.player.icon);
  const [color, _setColor] = useState<string>(inputs.player.color);

  const [isColorPickerVisible, setIsColorPickerVisible] = useState(false);

  const setName = (value: string) => {
    _setName(value);
    let tempPlayer = { ...inputs.player };
    tempPlayer.name = value;
    inputs.updatePlayer(tempPlayer);
  };

  const setIcon = (value: Icon) => {
    _setIcon(value);
    let tempPlayer = { ...inputs.player };
    tempPlayer.icon = value;
    inputs.updatePlayer(tempPlayer);
  };

  const setColor = (value: string) => {
    _setColor(value);
    let tempPlayer = { ...inputs.player };
    tempPlayer.color = value;
    inputs.updatePlayer(tempPlayer);
  };

  return (
    <div className="relative flex flex-col justify-between gap-1 h-[75px]">
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="flex-1 w-full py-1.5 pl-3 rounded-md border-0 text-smoky shadow-sm ring-1 ring-inset ring-umber/75 focus:ring-2 focus:ring-inset focus:ring-umber/75 sm:text-sm sm:leading-6"
      />

      <div className="flex-1 grid grid-cols-2 justify-between gap-1">
        <div
          style={{ background: `${color}` }}
          onClick={() => setIsColorPickerVisible(!isColorPickerVisible)}
          className="cursor-pointer w-full rounded-md border-0 text-smoky shadow-sm ring-1 ring-inset ring-umber/75 focus:ring-2 focus:ring-inset focus:ring-umber/75 sm:text-sm sm:leading-6"
        />

        <IconPicker icons={inputs.icons} icon={icon} setIcon={setIcon} />
      </div>

      {isColorPickerVisible && (
        <div className="z-50">
          <div
            className="fixed top-0 right-0 bottom-0 left-0"
            onClick={() => setIsColorPickerVisible(false)}
          />
          <SketchPicker
            color={color}
            disableAlpha={true}
            onChangeComplete={(hex) => {
              setColor(hex.hex);
            }}
          />
        </div>
      )}
    </div>
  );
}
