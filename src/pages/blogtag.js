import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
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
        <div className="postList">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            const img = `/${node.frontmatter.thumbnail}` // ? node.frontmatter.thumbnail.childImageSharp.fluid.src : '';
            return (
              <div key={node.fields.slug} className="post">
                <figure className="effect-julia">
                  <img src={img} alt="img21"/>
                  <figcaption>
                    <h3>
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
                      <p><a href={`/blog${node.fields.slug}`}>Would you like to know more?</a></p>
                    </div>
                  </figcaption>			
                </figure>
              </div>
            )
          })}
          <div style={{clear: 'both'}}></div>
        </div>
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
