import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import Template from "@/layouts/template";
import HomepageView from "@/views/homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Template>
      <HomepageView />
    </Template>
  );
}
