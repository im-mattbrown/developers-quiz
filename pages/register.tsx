import React from 'react';
import Layout from '../components/Layout';
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField"
import { RegisterComponent } from '../generated/apolloComponents';
import { CheckboxHtml } from '../components/styled/register/CheckboxHtml'
import { CheckboxCss } from "../components/styled/register/CheckboxCss";
import { CheckboxJs } from "../components/styled/register/CheckboxJs";
import { CheckboxReact } from "../components/styled/register/CheckboxReact";
import { CheckboxVue } from "../components/styled/register/CheckboxVue";
import { CheckboxGql } from "../components/styled/register/CheckboxGql";
import { CheckboxTs } from "../components/styled/register/CheckboxTs";
import { CheckboxVsc } from "../components/styled/register/CheckboxVsc";
import { CheckboxAws } from "../components/styled/register/CheckboxAws";
import { useRouter } from 'next/router'
import styled from "styled-components";
import Link from 'next/link';


const LoginLink = styled("div")`
  position: absolute;
  top: 6.4rem;
  right: 12.4rem;

  a {
    color: #333333 !important;
    font-size: 1.6rem;
    margin: 0 1.6rem;
  }
`;

const Heading = styled("div")`

  z-index: 20;
  color: #333333;
  font-size: 1.6rem;
  height: 80vmin;
  left: 50%;
  position: absolute;
  top: 16rem;
  transform: translate(-50%, -50%);
  width: 60vw;


  div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

    div div span {
  display: block;
}
    div.text-top {
  top: 0;
}
    div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
    div.text-top div span:first-child {
  color: #33333;
}


  @keyframes showTopText {
    0% { transform: translate3d(0, 100%, 0); }
    100% { transform: translate3d(0, 80%, 0); }
  }
`;

const Secondary = styled("div")`
  z-index: 20;
  color: #333333;
  font-size: 1rem;
  height: 20vmin;
  left: 50%;
  position: absolute;
  top: 20rem;
  transform: translate(-50%, -50%);
  width: 60vw;

  div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  div div {
    padding: 2vmin 0;
    position: absolute;
  }
  div div span {
    display: block;
  }
  div.text-top {
    top: 0;
  }
  div.text-top div {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }
  div.text-top div span:first-child {
    font-size: 1.6rem;
    color: #333333;
  }
  div.text-bottom {
    font-size: 1.2rem;
    bottom: 0;
  }
  div.text-bottom div {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }

  @keyframes showTopText {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: translate3d(0, 40%, 0);
    }
  }
  @keyframes showBottomText {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;


const BackRect = styled("div")`
  position: relative;
  background-color: #FCFCFC;
  height: 65rem;
  width: 60vw;
  margin-bottom: 25.6rem;
`;

const RegisterForm = styled("div")`
  padding: 2rem 0 0 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top 88%;
  right: -12.4rem;
  width: 25.6rem;
  height: 32rem;
  border: 1px solid #333333;
  box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.9);

  .input-field {
    color: blue;
    width: 19.2rem;
    height: 4rem;
    margin: 1.6rem 0;
    background-color: #f2f2f2;

    ::placeholder {
      color: #333333;
      font-size: 1.2rem;
    }
  }

  button {
    width: 19.2rem;
    background-color: #333333;
    color: #f2f2f2;
    height: 4rem;
    margin: 1.6rem 0 0 0;
  }

`;

const RegisterTitle = styled('h5')`
  text-align: left;
  font-size: 1.6rem;
  transform: translateX(-40px);
`

const Logo = styled("img")`
  z-index: 10;
  opacity: 0;
  position: absolute;
  right: 76px;
  top: 40px;
  width: 6.4rem;
  height: 6.4rem;

  &:hover {
    cursor: pointer;
  }

  animation: 0.6s cubic-bezier(0.03, 0.41, 0.45, 0.98) 0.3s forwards slidein;

  @keyframes slidein {
    from {
      opacity: 0.1;
      position: absolute;
      right: 76px;
      top: 40px;
    }
    to {
      opacity: 1;
      transform: translateX(-88vw);
    }
  }
`;


const Choices = styled("div")`
  position: absolute;
  top: 29rem;
  left: 16vw;
  z-index: 30;

  .flex-check-top {
    margin-left: 64px;
    margin-bottom: 72px;
    width: 400px;
    display: flex;
    justify-content: space-between;
  }

  .flex-check-middle {
    margin-left: 64px;
    margin-bottom: 72px;
    width: 400px;
    display: flex;
    justify-content: space-between;
  }

  .flex-check-bottom {
    margin-left: 64px;
    width: 400px;
    display: flex;
    justify-content: space-between;
  }

  #check-html {
    display: none;
  }

  #check-css {
    display: none;
  }

  #check-js {
    display: none;
  }

  #check-react {
    display: none;
  }

  #check-vue {
    display: none;
  }

  #check-gql {
    display: none;
  }

  #check-ts {
    display: none;
  }

  #check-vsc {
    display: none;
  }

  #check-aws {
    display: none;
  }

  #check-html + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080056/htmlGrey80_cjyo3a.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-css + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082228/cssgreyalt80_raqzgv.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-js + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082454/javascriptGrey80_folcou.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-react + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083123/reactGreySmall80_t93jqw.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-vue + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082751/vueGrey80_k2cs2b.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-gql + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587079441/graphQLSmallGrey80_w3s95n.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-ts + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080639/tsSmallGrey80_tarzfa.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-vsc + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083491/vsc80_sqrjio.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-aws + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083616/awsGrey80_o3ctkl.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 4px;
  }

  #check-html:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080045/htmlWhite80_fu5xih.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-css:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082217/csswhite80_qbtl1v.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-js:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082465/javascriptwhite80_r715no.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-react:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083134/reactWhite80_pcotyy.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-vue:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587082758/vueWhite80_kbvvsr.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-gql:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587079333/graphQLWhite_pqkpxf.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-ts:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587080646/tsSmallWhite80_xniiaf.png")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-vsc:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083481/vsc80White_svuesv.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }

  #check-aws:checked + label {
    background: url("https://res.cloudinary.com/dzghwkkzb/image/upload/v1587083626/awsWhite80_unvrcy.jpg")
      no-repeat;
    height: 80px;
    width: 80px;
    display: inline-block;
    padding: 0 0 0 0px;
    border: 4px solid #998675;
    box-shadow: -2px 2px 5px 0px rgba(0, 0, 0, 0.88);
  }
`;

export default () => {
  const router = useRouter();

  // let imageRandom = Math.floor(Math.random() * 30) + 1; 

  let profileArray = [
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/adolflinclerProfile_qrjm64.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/bethProfile_oljavi.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/alienProfile_dvqjqm.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/copMortyProfile_zvzvaz.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/babylegsProfile_a868qo.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/dumbRickProfile_mntoux.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/birdPersonProfile_b7sxyd.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/fridgeLadyProfile_rvtp06.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/adultProfile_wisecx.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/elonTuskProfile_rnrzzp.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/evilMortyProfile_mtmit6.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/gazorpProfile_dyplm1.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582395/headProfile_dylf8a.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/jerryGunsProfile_kmngre.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/jerryProfile_v71xwg.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/newbnewbProfile_tffozm.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/pickleRickProfile_ki58n2.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/mortyHammerProfile_rqyqag.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/mortyFaceProfile_hwe4ax.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/plutionianProfile_ouq0wq.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/poopyProfile_o6tcz2.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/scaryTerryProfile_d4tojh.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/rickProfile_dy8gs4.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/mortyProfile_lj7xab.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/meeseeksProfile_omdwvm.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/pencilvesterProfile_clrbhf.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/slowMobiusProfile_svctad.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/zigerianProfile_gmsw4q.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/squanchyProfile_um79p3.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582396/santaProfile_mypdxr.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/regularLegsProfile_d1b5of.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/teenRickProfile_hztkzu.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/summerProfile_dc9sdh.png",
    "https://res.cloudinary.com/dzghwkkzb/image/upload/v1587582397/timeCopProfile_ql0gup.png",
  ];

  return (
    <Layout title="register page">
      <Link href="/">
        <Logo src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587515984/dq-logo-square_hzvx1e.png" />
      </Link>
      <LoginLink>
        <p>already a user?</p>
        <Link href="/login">
          <a>login</a>
        </Link>
      </LoginLink>
      <Heading>
        <div className="text-top">
          <div>
            <span>
              <h1>Register For Developers Quiz App</h1>
            </span>
          </div>
        </div>
      </Heading>
      <Secondary>
        <div className="text-top">
          <div>
            <span>what are you interested in learning?</span>
          </div>
        </div>
        <div className="text-bottom">
          <div>select from the following</div>
        </div>
      </Secondary>
      <BackRect>
        <RegisterComponent>
          {(register) => (
            <Formik
              validateOnBlur={false}
              validateOnChange={false}
              onSubmit={async (data, { setErrors }) => {
                try {
                  const response = await register({
                    variables: {
                      data,
                    },
                  });
                  console.log(response);
                  router.push("/check-email");
                } catch (err) {
                  // console.log('err: ', err.graphQLErrors);
                  // const errors: { [key: string]: string} = {};
                  // err.graphQLErrors[0].extensions.exception.validationErrors.forEach(
                  //   (validationErr: any) => {
                  //     Object.values(
                  //       validationErr.constraints
                  //     ).forEach((message: any) => {
                  //       errors[validationErr.property] = message;
                  //     });
                  //   }
                  // );
                  console.log(err);
                  setErrors(err);
                }
              }}
              initialValues={{
                userName: "",
                email: "",
                password: "",
                profileImg: profileArray[33],
                html: false,
                css: false,
                js: false,
                react: false,
                vue: false,
                gql: false,
                ts: false,
                vsc: false,
                aws: false,
                level: 1,
                html_scores: [0],
                css_scores: [0],
                js_scores: [0],
                react_scores: [0],
                vue_scores: [0],
                gql_scores: [0],
                ts_scores: [0],
                vsc_scores: [0],
                aws_scores: [0]
              }}
            >
              {({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <RegisterForm>
                    <RegisterTitle>register now</RegisterTitle>
                    <Field
                      className="input-field"
                      name="userName"
                      placeholder="&nbsp; userName"
                      component={InputField}
                    />
                    <Field
                      className="input-field"
                      name="email"
                      placeholder="&nbsp; email"
                      component={InputField}
                    />
                    <Field
                      className="input-field"
                      name="password"
                      placeholder="&nbsp; password"
                      type="password"
                      component={InputField}
                    />
                    <button type="submit">submit</button>
                  </RegisterForm>
                  <Choices>
                    <div className="flex-check-top">
                      <CheckboxHtml id="check-html" name="html" />
                      <label htmlFor="check-html" />
                      <CheckboxCss id="check-css" name="css" />
                      <label htmlFor="check-css" />
                      <CheckboxJs id="check-js" name="js" />
                      <label htmlFor="check-js" />
                    </div>
                    <div className="flex-check-middle">
                      <CheckboxReact id="check-react" name="react" />
                      <label htmlFor="check-react" />
                      <CheckboxVue id="check-vue" name="vue" />
                      <label htmlFor="check-vue" />
                      <CheckboxGql id="check-gql" name="gql" />
                      <label htmlFor="check-gql" />
                    </div>
                    <div className="flex-check-bottom">
                      <CheckboxTs id="check-ts" name="ts" />
                      <label htmlFor="check-ts" />
                      <CheckboxVsc id="check-vsc" name="vsc" />
                      <label htmlFor="check-vsc" />
                      <CheckboxAws id="check-aws" name="aws" />
                      <label htmlFor="check-aws" />
                    </div>
                  </Choices>
                </form>
              )}
            </Formik>
          )}
        </RegisterComponent>
      </BackRect>
    </Layout>
  );
}