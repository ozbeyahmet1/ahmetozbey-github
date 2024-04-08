import { GetServerSideProps } from "next";
import { SearchPageProps, SearchPageResult } from "@/helpers/interfaces/pageProps";
import { fetchSearchPageResultsByQuery } from "@/helpers/utils/apiFunctions";
import Template from "@/layouts/template";
import SearchResultsPageView from "@/views/searchResults";

export default function Home({ searchPageResult }: SearchPageProps) {
  console.log("arr", searchPageResult);
  return (
    <Template>
      <SearchResultsPageView data={searchPageResult.items} />
    </Template>
  );
}

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async ({ query }) => {
  const { q } = query;
  const data = await fetchSearchPageResultsByQuery(q as string);
  const homepageData: SearchPageProps = { searchPageResult: data as SearchPageResult };
  return {
    props: homepageData,
  };
};
