import { GetServerSideProps } from "next";
import { HomepageProps } from "@/helpers/interfaces/pageProps";
import { fetchRepositoriesByNames } from "@/helpers/utils/apiFunctions";
import Template from "@/layouts/template";
import HomepageView from "@/views/homepage";
import { HomepageUIData } from "../datas/homepage.ui";

export default function Home({ data, ui }: HomepageProps) {
  return (
    <Template>
      <HomepageView data={data} ui={ui} />
    </Template>
  );
}

export const getServerSideProps: GetServerSideProps<HomepageProps> = async () => {
  const data = await fetchRepositoriesByNames(HomepageUIData.selectedRepositories);
  const ui = HomepageUIData;
  const homepageData: HomepageProps = { data, ui };
  return {
    props: homepageData,
  };
};
