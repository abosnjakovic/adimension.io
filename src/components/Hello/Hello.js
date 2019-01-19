import React from 'react'

// transitions
import { transitionStyles } from '../../utils/helpers'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

// components
import Svg from './Svg'

// styles
import styled from 'styled-components'
import './Hello.css'
const Wrapper = styled.main`
  ${tw`-mt-24 ml-10 w-5/6 md:w-2/3 md:-ml-24 md:pt-32 md:ml-0`};
`

const StyledLink = styled.a`
  color: black;
  text-decoration: none !important;
`
const Love = styled.span`
  color: #b02d2d;
`

class Hello extends React.Component {
  render() {
    return (
      <Wrapper className="hello hello-parent">
        <Svg />
        <p className="hello-hello">
          I'm <span className="hello-h2">Adam</span>, a full stack developer
          working from the <Love>&#9829;</Love>
          -ly city of Sydney for the folks{' '}
          <StyledLink href="https://wwf.org.au">@WWF-Australia</StyledLink> .
          You can see some of the work I have done for them and others in the{' '}
          <AniLink
            className="pinkLink"
            cover
            direction="right"
            to="/blog"
            bg={transitionStyles.bg}
            duration={transitionStyles.duration}
          >
            /blog
          </AniLink>{' '}
          pages and you can get to know more{' '}
          <AniLink
            className="pinkLink"
            cover
            direction="right"
            to="/about"
            bg={transitionStyles.bg}
            duration={transitionStyles.duration}
          >
            /about
          </AniLink>{' '}
          me personally... or not.
        </p>
      </Wrapper>
    )
  }
}

export default Hello
