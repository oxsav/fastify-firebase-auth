'use strict'

const t = require('tap')
const test = t.test
const Fastify = require('fastify')
const fastifyFirebaseAuth = require('./')
const firebaseConf = {
  apiKey: 'testApiKey1',
  databaseURL: 'firebase.app.com',
  projectId: 'firebase-1',
  storageBucket: 'firebase.appspot.com'
}

const fastify = Fastify()
fastify.register(fastifyFirebaseAuth, firebaseConf)

test('fastify.firebase.auth should exist', t => {
  t.plan(2)

  fastify.ready(err => {
    t.error(err)
    t.ok(fastify.auth)
    t.end()
  })
})
