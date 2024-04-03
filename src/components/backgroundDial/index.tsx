/*
  PURPOSE: This file is the BackgroundDial component that renders a SpeedDial component with SpeedDialActions for selecting a background.
*/
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { CSSProperties, useState } from "react";
import { backgroundData } from "@/datas/backgroundData";
import { BackgroundProperties } from "@/helpers/interfaces/common";
import ColorBadge from "../ui/colorBadge";

export default function BackgrounDial() {
  const [selectedBackground, setBackground] = useState<BackgroundProperties>(backgroundData[0]);
  const unselectedBackgrounds = backgroundData.filter((background) => background.id !== selectedBackground.id);
  const fabStyle: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "3px",
    width: "40px",
    height: "40px",
    position: "relative",
  };
  return (
    <SpeedDial
      ariaLabel="Color Badge Dial"
      direction="left"
      icon={<ColorBadge style={backgroundData.find((theme) => theme.id == selectedBackground.id)?.style || {}} />}
      FabProps={{ style: fabStyle }}>
      {unselectedBackgrounds.map((action) => (
        <SpeedDialAction
          key={""}
          icon={<ColorBadge style={backgroundData.find((theme) => theme.id == action.id)?.style || {}} />}
          tooltipTitle={action.name}
          onClick={() => setBackground(action)}
        />
      ))}
    </SpeedDial>
  );
}
