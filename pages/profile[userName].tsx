import * as React from "react";
import { MeComponent} from "../generated/apolloComponents";
import Layout from "../components/Layout";

export default () => {
  return (
    <Layout title="hello page">
      <MeComponent>
        {({ data }) => (
          <div>{data && data ? data : "loading..."}</div>
        )}
      </MeComponent>
    </Layout>
  );
};
