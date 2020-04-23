import { gql } from "apollo-boost";

export const registerMutation = gql`
         mutation Register($data: RegisterInput!) {
           register(data: $data) {
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