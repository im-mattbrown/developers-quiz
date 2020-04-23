import styled from "styled-components";
import React from "react";
import Link from "next/link";

const ImgContainer = styled("div")`
  height: 85vh;
  background: url('https://res.cloudinary.com/dzghwkkzb/image/upload/v1587501185/hero-large_j7tybj.jpg');
  background-size: cover;
`;

const HeroTitle = styled("div")`
  color: #f2f2f2;
  font-family: "Apercu Pro Mono";
  position: relative;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  max-width: 55%;
  text-align: center;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    background-color: rgba(51, 51, 51, 0.9);
  }
`;

const Logo = styled("img")`
  position: absolute;
  right: 76px;
  top: 40px;
  width: 6.4rem;
  height: 6.4rem;
`

const LogRegister = styled("div")`
  position: absolute;
  top: 85px;
  right: 156px;

  a {
    color: #f2f2f2 !important;
    font-size: 1.6rem;
    margin: 0 1.6rem;
  }
`

const HeroImg: React.FunctionComponent = () => (
  <ImgContainer>
    <LogRegister>
      <Link href="/login">
        <a>login</a>
      </Link>{" "}
      <Link href="/register">
        <a>signup</a>
      </Link>{" "}
    </LogRegister>
    <Logo src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587505436/dq-logo-squarewhite_moo9ai.png" />
    <HeroTitle>
      <h1>Welcome to Developers Quiz App</h1>
    </HeroTitle>
  </ImgContainer>
);

export default HeroImg;