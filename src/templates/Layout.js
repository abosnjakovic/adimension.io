import React from 'react'

// transitions
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { transitionStyles } from '../utils/helpers'

import { rhythm, scale } from '../utils/typography'

import SEO from '../components/SEO'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.0),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <AniLink
            cover
            direction="left"
            className="pinkLink"
            bg={transitionStyles.bg}
            duration={transitionStyles.duration}
            to={'/'}
          >
            {title}
          </AniLink>
        </h1>
      )
    } else {
      header = (
        <div>
          <h3
            style={{
              marginTop: 0,
              float: 'left',
              // marginBottom: rhythm(-1),
            }}
          >
            <AniLink
              cover
              direction="left"
              className="pinkLink"
              bg={transitionStyles.bg}
              duration={transitionStyles.duration}
              to={'/'}
            >
              {title}
            </AniLink>
          </h3>
          <h3
            style={{
              marginTop: 0,
              // marginBottom: rhythm(-1),
            }}
          >
            <AniLink
              cover
              direction="left"
              className="blackLink"
              bg={transitionStyles.bg}
              duration={transitionStyles.duration}
              to={'/blog'}
            >
              / blog
            </AniLink>
          </h3>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <SEO />
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
