export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5)
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
}

export const config = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'adimension - Adam Bosnjakovic Portfolio', // Navigation and Site Title
  siteTitleAlt: 'adimension', // Alternative Site title for SEO
  siteUrl: 'https://adimension.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  // siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'A portfolio by Adam Bosnjakovic built with React, Gatsby',

  userTwitter: '@adimension_io', // Twitter Username
  ogSiteName: 'adimension.io', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
}

export const transitionStyles = {
  bg: '#EBEFC9',
  duration: 0.7,
  type: 'cover',
}
