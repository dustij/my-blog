import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query GetAllPosts {
    blogPosts(sort: ["updatedAt:desc"]) {
      urlSlug
      title
      description
      updatedAt
    }
  }
`;

export const GET_SINGLE_POST = gql`
  query GetSinglePost($urlSlug: String!) {
    blogPosts(filters: { urlSlug: { eq: $urlSlug } }) {
      title
      content
      description
      updatedAt
    }
  }
`;

export type Post = {
  __typename: string;
  urlSlug: string;
  title: string;
  description: string;
};
