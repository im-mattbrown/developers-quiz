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
             html_scores
             css_scores
             js_scores
             react_scores
             vue_scores
             gql_scores
             ts_scores
             vsc_scores
             aws_scores
           }
         }
       `;
