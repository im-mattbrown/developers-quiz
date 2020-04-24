import { gql } from "apollo-boost";

export const meQuery = gql`
         query Me {
           me {
             id
             userName
             email
             profileImg
             html
             css
             js
             react
             vue
             gql
             ts
             vsc
             aws
             level
           }
         }
       `;
