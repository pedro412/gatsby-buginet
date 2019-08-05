import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaChalkboardTeacher } from 'react-icons/fa'

export const query = graphql`
  query GET_DESCRIPTION {
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
