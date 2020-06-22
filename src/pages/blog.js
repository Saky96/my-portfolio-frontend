import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        id
        slug
        desc
        date(formatString: "MMM Do, YYYY")
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return (
    <Layout>
      <section className="blog-page">
        <Blogs
          blogs={blogs}
          title="blog"
        />
      </section>
    </Layout>
  )
}

export default Blog
