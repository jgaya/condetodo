import React from "react"
import { StaticQuery,graphql } from "gatsby"
import PropTypes from "prop-types"

function Menu(current) {
  return (
    <StaticQuery
      query={menuQuery}
      render={data => {
        console.log(current)
        const tags = data.tagsGroup.group;
        return (
          <nav className="cl-effect-10">
            <a href="/blog/" data-hover="Todos">
              <span>Todos</span>
            </a>
            {tags.map((tag) => (
            <React.Fragment key={tag.fieldValue}>
              <a className={current.current === tag.fieldValue ? 'active': ''} href={`/tags/${tag.fieldValue}`} data-hover={tag.fieldValue}>
                <span>{tag.fieldValue}</span>
              </a>
            </React.Fragment>
            ))}
          </nav>
        );
      }}
    />
  )
}
const menuQuery = graphql`
  query MenuQuery {
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
`

Menu.defaultProps = {
  current: ``,
}

Menu.propTypes = {
  current: PropTypes.string,
}

export default Menu;
