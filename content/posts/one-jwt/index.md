---
title: One JWT to rule them all
description: using jwt with jwks congnito example 
date: 2020-10-26
draft: false
slug: /blog/one-jwt
tags:
  - cognito 
  - jwt
  - jwks
  - auth
---

*Okay let's setup the scenario here.*

Let's say you have a Node.js API and some front end framework, and you are using AWS Cognito to handle the authentication dance 💃 via the client side SDK either through Amplify or some other means.

Now you also want to **authenticate** your API calls against the **same user**, against the **same token**. This easily done by using that JWT and a JWKS on the server side to validate the JWT signature. 

I'll show you how via a typical middleware.

First head over to [jwt.io](https://jwt.io), this amazing tool will decode your JWT into something readable like 👇

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/pxvqbad24evh7muafdbz.png)

*On to the Node.js middleware*

Let's start with a class so we can define some protected functions. You could also just do functional programming here too. Whatever floats your boat ⛵

Using [Jose](https://github.com/panva/jose) it would look something like this to authenticate the token and either return the validated signature or fail.
![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/z8brq5fo3mv850o1z1fu.png)

You may need to get the token from the head in a more specific way like so.
```
    let token = context?.request?.headers().authorization || ''
    // Remove "Bearer " from start of token
    return (token = token.substring(7, token.length)) 
```

From here is just a matter of **context** depending on what language you are using.

I hope this help some one who has read the below AWS cognito guide and found that to be underwhelming.

🖖


> References
[AWS Guide](https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-using-tokens-verifying-a-jwt.html) - [Jose](https://github.com/panva/jose)


