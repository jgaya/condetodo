import React from "react"
import { StaticQuery,graphql } from "gatsby"
import PropTypes from "prop-types"

function FooterLights(current) {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const tags = data.tagsGroup.group;
        return (
            <div id="wrap">
                <div id="lightings">
                    <div id="one">
                        <div id="two">
                            <div id="three">
                                <div id="four">
                                    <div id="five">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
      }}
    />
  )
}
const footerQuery = graphql`
  query footerQuery {
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

FooterLights.defaultProps = {
  current: ``,
}

FooterLights.propTypes = {
  current: PropTypes.string,
}

export default FooterLights;
