import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        id
        github
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
        title
        stack {
          id
          title
        }
      }
    }
  }
`

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects }
  }
}) => {
  return (
    <Layout>
      <section className="projects-page" >
        <Projects
          projects={projects}
          title="all projects"
        />
      </section>
    </Layout>
  )
}

export default ProjectsPage
