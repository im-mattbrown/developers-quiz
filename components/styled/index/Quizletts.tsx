import styled from "styled-components";
import React from "react";

const ImgContainer = styled("div")`
  position: relative;
  top: -12vw;
  display: flex;
  justify-content: space-around;
  margin: 0 64px;
`;

const Quizlett = styled("img")`
  max-width: 25%;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.9);
  transition: .3s all;
  &:hover {
    transform: scale(1.12);
  }
`;

const Quizletts: React.FunctionComponent = () => (
  <ImgContainer>
    <Quizlett src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587506565/Screen_Shot_2020-04-20_at_3.30.46_PM_xfvyqb.png" />
    <Quizlett src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587506565/Screen_Shot_2020-04-20_at_3.30.46_PM_xfvyqb.png" />
    <Quizlett src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587506565/Screen_Shot_2020-04-20_at_3.30.46_PM_xfvyqb.png" />
  </ImgContainer>
);

export default Quizletts;
