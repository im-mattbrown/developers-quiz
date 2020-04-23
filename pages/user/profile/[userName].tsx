

// export default ProfilePage;
import * as React from "react";
import { MyContext } from "../../../interfaces/MyContext";
import { meQuery } from "../../../graphql/user/queries/me";
import { MeQuery } from "../../../generated/apolloComponents";
import  ProfilePage from '../../../components/styled/profile/Profile'

export default class Profile extends React.PureComponent {
  static async getInitialProps({
    query: { userName },
    apolloClient,
  }: MyContext) {
    if (!userName) {
      return {};
    }

    await apolloClient.query<
      MeQuery
    >({
      query: meQuery,
      variables: {
        userName: userName as string
      },
    });
    console.log(userName);

    return {};
  }

  render() {
    return (
      <ProfilePage></ProfilePage>
    )
  }
}