import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const Container = styled('div')`
  ${tw`w-full md:w-1/2`};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 auto;
`

export default ({ posts }) => (
  <Container className="grid">
    {posts.edges.map((item, i) => {
      let captionText = item.node.caption
        ? deleteTags(item.node.caption.text)
        : 'Instagram Post'
      //Check for missing images
      return item.node.localImage ? (
        <Image
          fluid={item.node.localImage.childImageSharp.fluid}
          key={i}
          caption={captionText}
        />
      ) : (
        <div />
      )
    })}
  </Container>
)

function deleteTags(text) {
  return text.replace(/^(\s*#\w+\s*)+$/gm, '')
}
