import { GetServerSideProps } from "next";
import { IssuePageProps } from "@/helpers/interfaces/pageProps";
import { fetchAssigneesByPath, fetchIssuesByPath, fetchLabelsByPath } from "@/helpers/utils/apiFunctions";
import Template from "@/layouts/template";
import IssuePageView from "@/views/issues";

/**
 * Renders the Issue page.
 * @param {IssuePageProps} data - The data for the Issue page.
 * @returns {JSX.Element} The rendered Issue page.
 */
export default function Issue({ data }: IssuePageProps): JSX.Element {
  return (
    <Template>
      <IssuePageView data={data} />
    </Template>
  );
}

/**
 * Retrieves the server-side props for the Issue page.
 * @param {Object} context - The context object containing information about the request.
 * @param {string} context.resolvedUrl - The resolved URL of the request.
 * @returns {Promise<{ props: IssuePageProps }>} The server-side props for the Issue page.
 */
export const getServerSideProps: GetServerSideProps<IssuePageProps> = async ({ resolvedUrl }) => {
  try {
    const repoPath = resolvedUrl.split("/repos/")[1];
    const repoName = repoPath.split("/issues")[0];

    const issueDatas = await fetchIssuesByPath(resolvedUrl);

    if (!Array.isArray(issueDatas)) {
      throw new Error("Invalid issue data");
    }


    const labelDatas = await fetchLabelsByPath(repoName);
    const assigneesDatas = await fetchAssigneesByPath(repoName);

    const issuePageData: IssuePageProps = {
      data: {
        issueDatas,
        labelDatas,
        assigneesDatas,
      },
    };

    return {
      props: issuePageData,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
