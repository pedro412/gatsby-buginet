import React from 'react'
import { graphql } from 'gatsby'

const PostsList = ({ data }) => {
  console.log(data)

  return (
    <h2>Articulos</h2>
  )
}

export default PostsList

export const query = graphql`
query GET_ARTICLES {
  allMarkdownRemark(limit: 10) {
   edges {
    node {
      id
      frontmatter {
        title
        path
        date
      }
    }
  }
}
}
`
