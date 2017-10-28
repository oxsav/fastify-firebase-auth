# fastify-firebase-auth

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

Fastify Firebase Auth API plugin.  
Under the hood the [firebase](https://github.com/firebase/firebase-js-sdk) is used, the options that you pass to `register` will be passed to the Firebase service.

## Install
```
npm i fastify-firebase-auth --save
```

## Usage

Add it to you project with `register` and you are done!  
This plugin will add the `auth` namespace in your Fastify instance, with the all functions in the [Firebase Auth API](https://firebase.google.com/docs/reference/js/firebase.auth.Auth):

Example:
```js
const fastify = require('fastify')

fastify.register(require('fastify-firebase-auth'), {
    apiKey: <FIREBASE_API_KEY>,
    databaseURL: <DATABASE_URL>,
    projectId: <PROJECT_ID>,
    storageBucket: <URL_STORAGE_BUCKET>
})

fastify.post('/signin', async (request, reply) => {
    const {email, password} = request.body;
    const response = await fastify.auth.signInWithEmailAndPassword(email, password);
    return response;
});

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})
```

## License

Licensed under [MIT](./LICENSE).
