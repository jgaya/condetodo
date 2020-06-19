import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm, scale } from "../utils/typography"
import FooterLights from "./footerlights"

class Layout extends React.Component {
  render() {
    const { location, title, children, classname } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

   /* if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/blog/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else { */
      header = (
        <React.Fragment>
          <h3
            style={{
              fontFamily: `helsinki, sans-serif`,
              marginTop: 0,
              transform: `rotate(-5deg)`,
              textAlign: `center`,
            }}
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                fontSize: `90px`,
                color: `#FF9800`,
                textShadow: `-7px 7px 2px #FFF`,
              }}
              to={location.pathname === blogPath ? `/blog/` : `/`}
            >
              {title}
            </Link>
          </h3>
          <h4 style={{ textAlign: `center`, marginTop: 0, fontFamily: `vtc_letterer_proregular, sans-serif`, fontSize: `28px`, color: '#ddd' }}>Posteando Con de Todo</h4>
        </React.Fragment>
      )
    // }
    return (
      <Wrapper>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: `99%`,
            // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header style={{ marginLeft: `auto`, marginRight: `auto`}}>{header}</header>
          <main className={classname}>{children}</main>
        </div>
        <Footer>
          <div className="footerLeft">

          </div>
          <div className="footerCenter">
          © 2017 - {new Date().getFullYear()}, hecho con{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>{` `}por{` `} <a href="https://www.caldensoft.com">Calden Soft</a> 
          </div>
          <div className="footerRight">

          </div>
          <FooterLights/>
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
`

export default Layout
