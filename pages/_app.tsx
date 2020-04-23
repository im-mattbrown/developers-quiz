import App from "next/app";
import React from "react";
import { ApolloProvider } from "react-apollo";
import withApollo from "../lib/withApollo";
import "../styles/global.css";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);