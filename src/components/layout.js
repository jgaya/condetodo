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
          <FooterLights>
          </FooterLights>
          <div className="data">
            <div className="footerLeft">
            </div>
            <div className="footerCenter">
            © 2017 - {new Date().getFullYear()}, hecho con{` `}<a href="https://www.gatsbyjs.org">Gatsby</a>{` `}por{` `} <a href="https://www.caldensoft.com">Calden Soft</a> 
            </div>
            <div className="footerRight">
              <a href="/rss.xml">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="50px" height="50px" id="RSSicon" viewBox="0 0 256 256">
                  <defs>
                  <linearGradient x1="0.085" y1="0.085" x2="0.915" y2="0.915" id="RSSg">
                  <stop offset="0.0" stop-color="#E3702D"/><stop offset="0.1071" stop-color="#EA7D31"/>
                  <stop offset="0.3503" stop-color="#F69537"/><stop offset="0.5" stop-color="#FB9E3A"/>
                  <stop offset="0.7016" stop-color="#EA7C31"/><stop offset="0.8866" stop-color="#DE642B"/>
                  <stop offset="1.0" stop-color="#D95B29"/>
                  </linearGradient>
                  </defs>
                  <rect width="256" height="256" rx="55" ry="55" x="0" y="0" fill="#CC5D15"/>
                  <rect width="246" height="246" rx="50" ry="50" x="5" y="5" fill="#F49C52"/>
                  <rect width="236" height="236" rx="47" ry="47" x="10" y="10" fill="url(#RSSg)"/>
                  <circle cx="68" cy="189" r="24" fill="#FFF"/>
                  <path d="M160 213h-34a82 82 0 0 0 -82 -82v-34a116 116 0 0 1 116 116z" fill="#FFF"/>
                  <path d="M184 213A140 140 0 0 0 44 73 V 38a175 175 0 0 1 175 175z" fill="#FFF"/>
                </svg>
              </a>
            </div>
          </div>
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
