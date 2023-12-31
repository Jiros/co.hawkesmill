import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <div 
        style={{
          padding: '15px',
        }}
    ><p><a href="mailto:hello@hawkesmill.co">hello@hawkesmill.co</a></p></div>
  </header>
)

export default Header
