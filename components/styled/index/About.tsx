import styled from "styled-components";
import React from "react";

const Container = styled("div")`
  margin: 0 22.5vw;
  position: relative;
  top: -12vh;

  p {
    font-size: 1.6rem;
  }
`;

const About: React.FunctionComponent = () => (
  <Container>
    <p>
      We are your resource for curated quiz questions on a range of development
      topics. Whether you are studying for an exam or just wanting to learn your
      strengths and weaknesses in certain areas, these quizzes are more than
      just questions and answers. <br/> Developers Quiz identifies the areas that you
      may need to brush up on and recommends a study plan of articles, videos
      and documentation to help you grow new skills and level up in your career.
    </p>
  </Container>
);

export default About;
