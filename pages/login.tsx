import React from "react";
import Layout from "../components/Layout";
import { Formik, Field } from "formik";
import { InputField } from "../components/fields/InputField";
import { LoginComponent, MeQuery } from "../generated/apolloComponents";
import { useRouter } from "next/router";
import { meQuery } from "../graphql/user/queries/me";
import styled from 'styled-components';
import Link from "next/link";

const RegisterForm = styled("div")`
  padding: 2rem 0 0 0;
  font-size: 1.2rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top 30vh;
  left: 50%;
  transform: translateX(-50%);
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
      padding-left: .8rem;
    }
  }

  button {
    width: 19.2rem;
    background-color: #333333;
    color: #f2f2f2;
    height: 4rem;
    margin: 1.6rem 0;
  }

`;

const Logo = styled("img")`
  position: absolute;
  left: 76px;
  top: 40px;
  width: 6.4rem;
  height: 6.4rem;

  &:hover {
    cursor: pointer;
  }
`

export default () => {
  const router = useRouter();

  return (
    <Layout title="login page">
      <Link href ="/">
      <Logo src="https://res.cloudinary.com/dzghwkkzb/image/upload/v1587515984/dq-logo-square_hzvx1e.png" />
      </Link>
      <LoginComponent>
        {login => (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors }) => {
                const response = await login({
                  variables: data,
                  update: (cache, {data}) => {
                    if(!data || !data.login) {
                     return;
                    }
                    
                    cache.writeQuery<MeQuery>({
                      query: meQuery,
                      data: {
                        me: data.login
                      }
                    })
                  }
                });
                console.log(response.data!.login?.userName as any);
                if (response && response.data && !response.data.login) {
                  setErrors({
                    email: "invalid login"
                  });
                  return;
                }
                console.log(data)
                router.push('/user/profile/' + response.data!.login?.userName)
            }}
            initialValues={{
              email: "",
              password: ""
            }}
          >
            {({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <RegisterForm>
                <Field
                  name="email"
                  placeholder="email"
                  className="input-field"
                  component={InputField}
                />
                <Field
                  name="password"
                  placeholder="password"
                  className="input-field"
                  type="password"
                  component={InputField}
                />
                <button type="submit">submit</button>
                <p>not yet registered?</p>
                <Link href="/register">
                  <a>register now</a>
                </Link>
                </RegisterForm>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};
