import { Montserrat } from "next/font/google";
import { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { backgroundSelector } from "@/store";
import Background from "../background";
import HeadLayout from "../head";
import Header from "../header";

const montserrat = Montserrat({
  subsets: ["latin"],
});
export default function Template({ children }: PropsWithChildren) {
  const background = useSelector(backgroundSelector);
  return (
    <>
      <HeadLayout />
      <main className={montserrat.className} style={{ height: "100%" }}>
        <Header />
        {children}
        <Background background={background.value} />
      </main>
    </>
  );
}
