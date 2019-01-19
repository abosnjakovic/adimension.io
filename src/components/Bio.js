import React from 'react'

import profilePic from '../assets/adam-bw.svg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        className="bio w-1/2"
        style={{ display: 'flex', marginBottom: rhythm(2.5) }}
      >
        <img
          src={profilePic}
          alt={`Adam Bosnjakovic`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
          }}
        />
        <p style={{ maxWidth: 310 }}>
          Personal blog by{' '}
          <a href="https://twitter.com/adimension_io">Adam Bosnjakovic</a>.
          I&nbsp;code things, here are the things.
        </p>
      </div>
    )
  }
}

export default Bio
