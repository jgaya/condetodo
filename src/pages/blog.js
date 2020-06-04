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
          // display: 'grid',
          // gridTemplateColumns: 'repeat(4, 1fr)',
          // gap: '5px 10px',
          columns: 4,
          columnGap: 5,
          padding: 5,
          }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const img = node.frontmatter.thumbnail ? node.frontmatter.thumbnail.childImageSharp.fluid.src : '';
            return (
              <div key={node.fields.slug} style={{
                // border: '1px solid black',
                height: 'auto',
                background: '#2f3238',
                // boxShadow: '0 0 5px 2px white',
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                minHeight: 200,
                breakInside: 'avoid',
                marginBottom: '10px',
              }}>
                <figure class="effect-julia">
                  <img src={img} alt="img21"/>
                  <figcaption>
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
                    <div>
                      <p>{node.frontmatter.date}</p>
                      <p>{node.frontmatter.description || node.excerpt}</p>
                      <p><a href={`${node.fields.slug}`}>Would you like to know more?</a></p>
                    </div>
                  </figcaption>			
                </figure>
              </div>
            )
          })}
          <div style={{clear: 'both'}}></div>
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
            thumbnail {
              childImageSharp {
                fixed(width: 50, height: 50) {
                  ...GatsbyImageSharpFixed
                }
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
