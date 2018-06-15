'use strict'

const fp = require('fastify-plugin')
const Firebase = require('firebase')

/**
 * @method fastifyFirebaseAuth
 * @param {Object} fastify - fastify instance
 * @param {Object} options - options to set fastify service
 * @param {Function} next - next function
 */
function fastifyFirebaseAuth (fastify, options, next) {
  Firebase.initializeApp(options)

  const {auth} = Firebase

  fastify.decorate('auth', {
    applyActionCode: (code) => auth()
      .applyActionCode(code),

    checkActionCode: (code) => auth()
      .checkActionCode(code),

    confirmPasswordReset: (code, newPass) => auth()
      .confirmPasswordReset(code, newPass),

    createUserWithEmailAndPassword: (email, password) => auth()
      .createUserWithEmailAndPassword(email, password),

    fetchProvidersForEmail: (email) => auth()
      .fetchProvidersForEmail(email),

    getRedirectResult: (nextOrObserver, error, completed) => auth()
      .getRedirectResult(nextOrObserver, error, completed),

    onIdTokenChanged: (nextOrObserver, error, completed) => auth()
      .onAuthStateChanged(nextOrObserver, error, completed),

    sendPasswordResetEmail: (email, actionCodeSettings) => auth()
      .sendPasswordResetEmail(email, actionCodeSettings),

    setPersistence: (persistence) => auth()
      .setPersistence(persistence),

    signInAndRetrieveDataWithCredential: (credential) => auth()
      .signInAndRetrieveDataWithCredential(credential),

    signInWithCredential: (credential) => auth()
      .signInWithCredential(credential),

    signInAnonymously: () => auth()
      .signInAnonymously(),

    signInWithCustomToken: (token) => auth()
      .signInWithCustomToken(token),

    signInWithEmailAndPassword: (email, password) => auth()
      .signInWithEmailAndPassword(email, password),

    signInWithPhoneNumber: (phoneNumber, applicationVerifier) => auth()
      .signInWithPhoneNumber(phoneNumber, applicationVerifier),

    signInWithPopup: (provider) => auth()
      .signInWithPopup(provider),

    signInWithRedirect: (provider) => auth()
      .signInWithRedirect(provider),

    signOut: () => auth()
      .signOut(),

    useDeviceLanguage: (e, p) => auth()
      .useDeviceLanguage(e, p),

    verifyPasswordResetCode: (code) => auth()
      .verifyPasswordResetCode(code)
  })

  next()
}

module.exports = fp(fastifyFirebaseAuth, '>=0.30.3')
