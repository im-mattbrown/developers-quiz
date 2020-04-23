import * as React from 'react'
// import Link from 'next/link'
import Head from 'next/head'
// import { MeComponent } from '../generated/apolloComponents';
import styled from 'styled-components';

type Props = {
  title?: string
}

const Container = styled('div')`
  background-color: #fffff;
`

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "developers quiz",
}) => (
  <Container>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="//db.onlinewebfonts.com/c/bf436b16c1cc2fbc68aa9413bca8ec29?family=Apercu+Pro+Mono"
        rel="stylesheet"
        type="text/css"
      />
    </Head>
    {/* <header>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>{" "}
        |{" "}
        <Link href="/login">
          <a>Login</a>
        </Link>{" "}
        |{" "}
        <Link href="/register">
          <a>Register</a>
        </Link>{" "}
        |{" "}
        <Link href="/forgot-password">
          <a>Forgot Password</a>
        </Link>{" "}
        |{" "}
        <Link href="/hello">
          <a>Hello</a>
        </Link>{" "}
        |{" "}
        <MeComponent>
          {({ data, loading }) => {
            if (!data || loading || !data.me) {
              return null;
            }
            return (
              <Link href="/logout">
                <a>logout</a>
              </Link>
            );
          }}
        </MeComponent>
      </nav>
    </header> */}
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </Container>
);

export default Layout
