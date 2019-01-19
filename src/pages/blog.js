import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

// utils
import { formatReadingTime, transitionStyles } from '../utils/helpers'
import { rhythm } from '../utils/typography'

// components
import Bio from '../components/Bio'
import Layout from '../templates/Layout'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout
        location={this.props.location}
        title={siteTitle}
        style={{ marginBottom: rhythm(2.5) }}
      >
        <Bio />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <article key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <AniLink
                  className="blackLink"
                  cover
                  direction="right"
                  bg={transitionStyles.bg}
                  duration={transitionStyles.duration}
                  style={{ boxShadow: 'none', color: '#000!important' }}
                  to={node.fields.slug}
                >
                  {title}
                </AniLink>
              </h3>
              <small>
                {node.frontmatter.date}
                {` • ${formatReadingTime(node.timeToRead)}`}
              </small>
              <p
                dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
              />
            </article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
          }
        }
      }
    }
  }
`
