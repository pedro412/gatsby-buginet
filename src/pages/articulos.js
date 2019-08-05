import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Articulos = ({ data }) => {
  console.log(data.allMarkdownRemark.edges)

  return (
    <Layout>
      <SEO title='Articulos' />
      <h1 className='text-center'>Articulos</h1>
      {
        data.allMarkdownRemark.edges.map(post => {
          console.log(post.node)
          return (

            <div key={post.node.id}>
              <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>

            </div>
          )
        })
      }
    </Layout>
  )
}

export default Articulos

export const queryArticulos = graphql`
query  {
  allMarkdownRemark(limit: 100) {
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
