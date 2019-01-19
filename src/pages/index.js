import React from 'react'

// styles
import styled from 'styled-components'
import { rhythm } from '../utils/typography'

// components
import Hello from '../components/Hello/Hello'
import Adam from '../components/SVG/Wpap'
import Social from '../components/Social/Social'
import SEO from '../components/SEO'

const Layout = styled.div`
  ${tw`min-h-screen`};
`
const Wrapper = styled.div`
  ${tw`container flex flex-wrap items-center mx-auto min-h-screen`};
`
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SEO />
        <Wrapper>
          <Adam />
          <Hello />
        </Wrapper>
        <Social />
      </Layout>
    )
  }
}

export default Index
