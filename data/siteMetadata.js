const siteMetadata = {
  title: 'Adam Bosnjakovic',
  author: 'Adam Bosnjakovic',
  headerTitle: 'adimension',
  description: 'CTO @ Experience Digital',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://adimension.io',
  siteRepo: 'https://github.com/abosnjakovic/adimension.io',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.webp',
  socialBanner: '/static/images/twitter-card.png',
  email: 'adam@adimensin.io',
  github: 'https://github.com/abosnjakovic',
  twitter: 'https://twitter.com/adimension_io',
  linkedin: 'https://www.linkedin.com/in/abosnjakovic/',
  spotify: 'https://open.spotify.com/user/1236398322',
  locale: 'en-US',
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO || '',
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID || '',
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY || '',
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '',
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
