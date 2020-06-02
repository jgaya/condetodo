import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div style={{ 
          margin: "20px 0 40px",
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '5px 10px',
          padding: 5,
          background: '#fff',
          }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug} style={{
                border: '1px solid black',
                height: 'auto',
                background: '#2f3238',
                boxShadow: '0 0 5px 2px black',
              }}>
                <h3
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    fontFamily: 'vtc_letterer_proregular',
                    fontSize: '22px',
                    padding: '0.5em',
                    marginTop: 0,
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{ boxShadow: `none` }}
                    to={`blog${node.fields.slug}`}
                  >
                    {title}
                  </Link>
                </h3>
                <div style={{ padding: 5 , background: `url(${node.frontmatter.thumbnail})`}}>
                  <small>{node.frontmatter.date}</small>
                  <p style={{ margin: 0 }}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
