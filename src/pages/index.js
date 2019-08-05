import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaChalkboardTeacher } from 'react-icons/fa'

export const query = graphql`
  query  {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)

  const title = data.allSite.edges[0].node.siteMetadata.description

  return (
    <Layout>
      <SEO title='Home' />
      <h1 className='text-center'>{title}</h1>
      <hr />

      <h2 className='text-center'><FaChalkboardTeacher /> Tutoriales</h2>

      <Link to='/page-2/'>Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

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
