import * as React from "react";
import Template from "@/layouts/template";
import ErrorPage from "@/views/404";

export interface IAppProps {}

export default function Error() {
  return (
    <Template>
      <ErrorPage />
    </Template>
  );
}
