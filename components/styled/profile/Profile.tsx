import styled from "styled-components";
import React from "react";
import Link from 'next/link'

import { MeComponent } from "../../../generated/apolloComponents"

const Wrapper = styled('div')`

`

const Logout = styled('div')`
  position: fixed;
  right: 4rem;
  top: 24vw;

  a {
    color: #333333 !important;
    font-size: 1.4rem;
  }
`

const Logo = styled("img")`
  position: absolute;
  left: 76px;
  top: 40px;
  width: 6.4rem;
  height: 6.4rem;
`

const ProfileImg = styled('img')`
  position: fixed;
  right: 4rem;
  top: 8rem;
  max-height: 24rem;
  max-width: 24rem;
  width: 16vw;
  height: 16vw
  border: 1px solid #333333;
  box-shadow:  -2px 2px 5px 0px rgba(0, 0, 0, 0.9);
`

const Name = styled('h1')`
  position: fixed;
  right: 40px;
  top: 3.2rem;
  font-size: 3.2rem;
`

const Level = styled('h5')`

  position: fixed;
  right: 12.8rem;
  top: 24vw;
  font-size: 1.4rem;
`

const Categories = styled('div')`
  position: absolute;
  left: 7.6rem;
  top: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  img {
    display: block;
    height: 8rem;
    width: 8rem;
    &:hover {
      cursor: pointer;
    }
  }

  h3 {
    display: block;
    font-size: 1.04rem;
  }
`

const CategorieWrapper = styled('div')`
  display: flex;
  align-items: flex-start;
  margin-bottom: 12.4rem;
`

const QuizWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`

const Stats = styled('div')`
  display: inline-block;
  width: 60vw;
  height: 8rem;
  border: 1px solid #333333;
  box-shadow:  -2px 2px 5px 0px rgba(0, 0, 0, 0.9);
  padding-bottom: 8rem;
`
const ProfilePage: React.FunctionComponent = () => (
  <MeComponent>
    {({ data }) => 
    <Wrapper>
       <Logo src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587515984/dq-logo-square_hzvx1e.png" />
      <Name>{data!.me?.userName}</Name>
      <ProfileImg src={data!.me?.profileImg}></ProfileImg>
      <Logout>
      <Link href="/logout">
        <a>logout</a>
      </Link>
      </Logout>
      <Level>level : {data!.me?.level.toFixed(2)}</Level>
      <Categories>
        {data!.me?.html &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
              <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080056/htmlGrey80_cjyo3a.jpg" />
              <h3>take a quiz</h3>
            </QuizWrapper> 
              </Link>
            <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.css &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
              <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082228/cssgreyalt80_raqzgv.png" />
              <h3>take a quiz</h3>
            </QuizWrapper>
              </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.js &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082454/javascriptGrey80_folcou.png" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.react &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083123/reactGreySmall80_t93jqw.jpg" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.vue &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082751/vueGrey80_k2cs2b.png" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.gql &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587079441/graphQLSmallGrey80_w3s95n.jpg" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.ts &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080639/tsSmallGrey80_tarzfa.png" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.vsc &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083491/vsc80_sqrjio.jpg" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
        {data!.me?.aws &&
          <CategorieWrapper>
              <Link href="/">
            <QuizWrapper>
          <img src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083616/awsGrey80_o3ctkl.jpg" />
          <h3>take a quiz</h3>
          </QuizWrapper>
          </Link>
          <Stats></Stats>
          </CategorieWrapper>
        }
      </Categories>
      
    </Wrapper>
    }
  </MeComponent>
);

export default ProfilePage;
