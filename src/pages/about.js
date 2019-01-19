import React from 'react'
import { graphql, Link } from 'gatsby'
import $ from 'jquery'

import styled from 'styled-components'
import { rhythm, scale } from '../utils/typography'

import Gallery from '../components/Insta/Gallery'
import Social from '../components/Social/Social'

const Wrapper = styled.div`
  ${tw`flex flex-wrap-reverse`};
`

const Content = styled.div`
  ${tw`w-full md:w-1/2`};
`

const H1 = styled.h1`
  ${tw`text-center align-middle`};
  position: relative;
  top: 50%;
  transform: translateY(-50%);
`

const IframWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
`
const Iframe = styled.iframe`
  ${tw`w-full md:w-1/2`};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export default ({ data }) => {
  if (typeof window !== `undefined`) {
    // Find all YouTube videos
    var $allVideos = $("iframe[src^='//www.youtube.com']"),
      // The element that is fluid width
      $fluidEl = $('body')

    // Figure out and save aspect ratio for each video
    $allVideos.each(function() {
      $(this)
        .data('aspectRatio', this.height / this.width)

        // and remove the hard coded width/height
        .removeAttr('height')
        .removeAttr('width')
    })

    // When the window is resized
    $(window)
      .resize(function() {
        var newWidth = $fluidEl.width()

        // Resize all videos according to their own aspect ratio
        $allVideos.each(function() {
          var $el = $(this)
          $el.width(newWidth).height(newWidth * $el.data('aspectRatio'))
        })

        // Kick off one resize to fix all videos on page load
      })
      .resize()
  }

  return (
    <div>
      {/* <div>
        <h3
          style={{
            fontFamily: 'Abril Fatface',
            marginTop: 0,
            float: 'left',
            // marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#ffa7c4',
            }}
            to={'/'}
          >
            adimension
          </Link>
        </h3>
        <h3
          style={{
            fontFamily: 'Abril Fatface',
            marginTop: 0,
            // marginBottom: rhythm(-1),
          }}
        >
          <Link
            style={{
              padding: '0 0 0 10px',
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#000',
            }}
            to={'/about'}
          >
            / about
          </Link>
        </h3>
      </div> */}

      <Wrapper>
        <Gallery posts={data.allInstagramContent} />
        <Content>
          <H1>Instagram</H1>
        </Content>
      </Wrapper>

      {/* <Wrapper>
        <Content>
          <H1>Youtube</H1>
        </Content>
        <IframWrapper>
          <Iframe
            height="100%"
            src="https://www.youtube.com/embed/guJSaTPdQ14?controls=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </IframWrapper>
      </Wrapper> */}

      {/* <h1>Youtube</h1>
      <Social /> */}
    </div>
  )
}

export const query = graphql`
  query InstagramPosts {
    allInstagramContent(limit: 12) {
      edges {
        node {
          link
          caption {
            text
          }
          localImage {
            childImageSharp {
              fluid(maxHeight: 500, maxWidth: 500, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          images {
            standard_resolution {
              width
              height
              url
            }
            low_resolution {
              url
            }
          }
        }
      }
    }
  }
`
