import * as React from "react";
import Layout from "../components/Layout";
import HeroImg from '../components/styled/index/HeroImg'
import Quizletts from "../components/styled/index/Quizletts";
import About from "../components/styled/index/About";


const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout title="Developers Quiz App">
      <HeroImg />
      <Quizletts />
      <About />
    </Layout>
  );
};

export default IndexPage;
