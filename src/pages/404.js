import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <h1 style={{textAlign: 'center' }}>Creo que nos perdimos...</h1>
        <img src="/assets/404.png" alt="404" style={{ margin: '0 auto', display: 'block'}}/>
        <p style={{textAlign: 'center' }}>Encontraste una pagina que no existe, eso quiere decir que no la encontraste entonces... </p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
