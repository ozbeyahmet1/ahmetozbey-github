/*
  PURPOSE: This file is the BackgroundDial component that renders a SpeedDial component with SpeedDialActions for selecting a background.
*/
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { CSSProperties } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backgroundData } from "@/datas/backgroundData";
import { backgroundSelector } from "@/store";
import { setBackground } from "@/store/slices/backgroundSlice";
import ColorBadge from "../ui/colorBadge";

export default function BackgrounDial() {
  const background = useSelector(backgroundSelector);
  const unselectedBackgrounds = backgroundData.filter((theme) => theme.id !== background.value.id);
  const dispatch = useDispatch();

  const fabStyle: CSSProperties = {
    backgroundColor: "white",
    borderRadius: "100%",
    padding: "3px",
    width: "36px",
    height: "36px",
    position: "relative",
  };
  return (
    <SpeedDial
      ariaLabel="Color Badge Dial"
      direction="left"
      icon={
        <ColorBadge style={backgroundData.find((theme) => theme.id == background.value.id)?.style as CSSProperties} />
      }
      FabProps={{ style: fabStyle }}>
      {unselectedBackgrounds.map((action) => (
        <SpeedDialAction
          key={""}
          icon={<ColorBadge style={backgroundData.find((theme) => theme.id == action.id)?.style as CSSProperties} />}
          tooltipTitle={action.name}
          onClick={() => dispatch(setBackground(action.id))}
        />
      ))}
    </SpeedDial>
  );
}
