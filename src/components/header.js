import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0, padding:10 }}>
        {/* <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> */}
        <Link to="/" style={{color:'black'}}> Home {' '}</Link>
        <Link to="/motion" style={{color:'black'}}>Motion {' '}</Link>
        <Link to="/page-load" style={{color:'black'}}>Page-Load{' '}</Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
