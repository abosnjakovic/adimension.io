---
title: ' WWF-Australia, the panda made me do it!'
date: '2018-12-03'
spoiler: 'Coding in one of the worlds leading envrionment organisastions, #ethicalcoding.'
---

_Coding in one of the worlds leading envrionment organisastions #ethicalcoding._

![Crystal globe resting on moss in a forest - environment concept © Shutterstock / Romolo Tavani / WWF](../../assets/img-planet-globe-on-moss-forest-1000px.jpg)
_It's easy to build a beautiful websites when you have even more stunning imagery._

Working as a full stack developer in the [WWF](hyy[s://wwf.org.au]) marketing team means you wear many hats. Some small, some make you look like your going to the races and often you are. Things move fast in media, in fact they already happened, didn't you see? You need to code for a variety of things, those things;

```js
let hatTypesByTimeSpentMonthlyAsPercentage = {
  fontend: '25',
  backend: '35',
  marketing: '40', //🧐 Who dis
  devops: '5',
}
```

_Let's break this down a little._

<!-- Front end -->

The **font end stack** we are currently working with is Vue, what a great framework it is. It helped us to develop modular components fast and use them and in and existing CMS like dynamic interchangible widgets. It became inheritly platform agnostic.

The project is built with the Vue CLI 3 now, recently migrating Vue 2x with a 500+ lines of [logo] Webpack 2 configuration to boot it is now much simpler to maintain this. _Reducing devops time spent._

[Before and after code snippets of webpack configs and build sizes].

Hosting, Firebase. Firstly how easy Firebase is to use, simple CLI tool and documentation to follow. The whole process could not have been faster.

We use the realtime database, it has made the checkout process faster. The first request to Firebase has to initiate a protocol switch. [Switching protocols](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101) makes the first call slower than say the same REST call but after that is where the magin happens.

So to be clear using websockets and switching protocols only performs faster than a GraphQL or REST call when you intend to make subsequent calls in quick succession.

This is perfect when a user is filling out a checkout form, every key stroke is considered a valued peice of data and the realtime database saves every one so there is no need to do a `"push"` type event at the end of the process.

Some key take aways from this is now `"cart abandonment"` can be handled without the need for complex logic. Using **PWA** and its offline capabilities means offline mode can store and resume a checkout process if say your mobile coverage is lacking.

![Vue + Firebase](../../assets/vuePlusFirebase.png)
_Vue + Firebase ftw!_

<!-- Back end -->

For the **back end stack** we go back to Firebase as it runs its `Functions` on NodeJS. Recently moving the code base to TypeScipt by usuing the method `"Make JavaScript files TypeScript files and start adding in the types."` which has worked out well. You can really start to refactor the codebase at this point and eliminate possible bugs as a result.

_Things of note; we do not use Express and have not needed to as yet. Keeping the NodeJS build lean. Firebase still uses NodeJS version 6+ which is not ideal as the new LTS is @ 10+ and has many useful features._

<!-- Marketing -->

Let's talk **marketing**, yes. Being able to market the things you have and do well is very important for a brand. In terms of the technology behind that brand should remain invisible only to serve the higher cause that is... marketing.

At a super high level, we do things with Google `(Analytics, Optimize, AdRoll, Places, YouTube)`, all the social platforms and their API's, Marketo `(marketing CRM and EDM tool)` just to name a few. It boils down to making those **data driven decisions** and being proactive, not reactive.

I have coded with many of these tools for integration, personalisation and analytics. The is code marketing.

<!-- Devops -->

**Development operations** is something you spend time on so you can spend more time on other things. Important things. Right? Right, it's often over looked, being one of the most important factors is shipping optimised bug free code with a great CI/CD setup.

What do we do is keep it simple. **Git** is your friend, code is pushed to our Private bitbucket repos. The production branch is built, some Pipelines are setup to some unit and e2e tests with mocha and chai and nightwatch. If all is well the code is pushed to its respective service. Some stuff is on Firebase and the rest is on Azure.

Questions? Great, you can [email](mailto:adam@adimension.io) me!
