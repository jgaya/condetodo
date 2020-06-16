import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import Menu from "../components/menu"

class Blogtag extends React.Component {
  render() {
    const { data, pageContext } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const tag = pageContext.tag 

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={`All posts about ${tag}`} />
        <Menu current={tag}/>
        <div style={{ 
          margin: "20px 0 40px",
          columns: 4,
          columnGap: 5,
          padding: 5,
          }}>
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const img = `/${node.frontmatter.thumbnail}` // ? node.frontmatter.thumbnail.childImageSharp.fluid.src : '';
            return (
              <div key={node.fields.slug} style={{
                height: 'auto',
                background: '#2f3238',
                position: 'relative',
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                minHeight: 200,
                breakInside: 'avoid',
              }}>
                <figure className="effect-julia">
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
                        style={{ boxShadow: `none`, color: '#fff' }}
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
        <Bio />
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blogtag

export const pageQuery = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {fields: {}, frontmatter: {tags: {in: [$tag]}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt(truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            thumbnail
            tags
          }
        }
      }
    }
  }
`
