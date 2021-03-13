import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"
import Menu from "../components/menu"

class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home - ConDeTodo"
          keywords={[`peliculas`, `tv`, `web`, `comics`]}
        />
        <Menu/>
        <div class="wrapper">
          {posts.map(({ node }, index) => {
              const title = node.frontmatter.title || node.fields.slug;
              const img = `/${node.frontmatter.thumbnail}` // ? node.frontmatter.thumbnail.childImageSharp.fluid.src : '';
              const style = index === 0 ? 'news-item hero-item' : 'news-item standard-item';
              return (
                <div key={node.fields.slug} className={style} style={{backgroundImage:`url("${img}")`}}>
                <div class="item-title">
                  <p><a href={`/blog${node.fields.slug}`}>{node.frontmatter.date} - {node.frontmatter.description || node.excerpt}</a></p>
                </div>
              </div>
              )
            })}
        </div> 
      </Layout>
    )
  }
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: {order: DESC, fields: [frontmatter___date]}, limit: 7) {
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
            thumbnail
          }
        }
      }
    }
  }
`
export default IndexPage
/*
           <div class="news-item hero-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
          <div class="news-item standard-item">
            <div class="item-title"> Con De Todo</div>
          </div>
*/ 