import { BackgroundProperties } from "@/helpers/interfaces/common";

export const backgroundData: Array<BackgroundProperties> = [
  {
    id: 1,
    name: "Sunset",
    style: {
      backgroundColor: "#659999",
      background: "linear-gradient(to right, #f4791f, #659999)",
      color: "white",
      height: "100%",
    },
  },
  {
    id: 2,
    name: "Sunrise",
    style: {
      backgroundColor: "#8A2387",
      background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
      color: "white",
      height: "100%",
    },
  },
  {
    id: 3,
    name: "Green",
    style: {
      backgroundColor: "#44A08D",
      background: "linear-gradient(to bottom, #093637, #44A08D)",
      color: "white",
      height: "100%",
    },
  },
  {
    id: 4,
    name: "Rainbow",
    style: {
      backgroundColor: "#00dbde",
      background: "linear-gradient(29deg, #00dbde 0%, #fc00ff 100%)",
      color: "white",
      height: "100%",
    },
  },
  {
    id: 5,
    name: "Blue",
    style: {
      backgroundColor: "rgb(44, 44, 44)",
      background: "rgb(44, 44, 44)",
      color: "white",
      height: "100%",
    },
  },
];
