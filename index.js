'use strict'

const fp = require('fastify-plugin')
const Firebase = require('firebase')

/**
 * Set response when an error happens
 * @method fastifyFirebaseAuth
 * @param {Object} fastify - fastify instance
 */
const setError = error => ({
  statusCode: error.code,
  message: error.message
})

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
      .applyActionCode(code)
      .catch(setError),

    checkActionCode: (code) => auth()
      .checkActionCode(code)
      .catch(setError),

    confirmPasswordReset: (code, newPass) => auth()
      .confirmPasswordReset(code, newPass)
      .catch(setError),

    createUserWithEmailAndPassword: (email, password) => auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(setError),

    fetchProvidersForEmail: (email) => auth()
      .fetchProvidersForEmail(email)
      .catch(setError),

    getRedirectResult: (nextOrObserver, error, completed) => auth()
      .getRedirectResult(nextOrObserver, error, completed),

    onIdTokenChanged: (nextOrObserver, error, completed) => auth()
      .onAuthStateChanged(nextOrObserver, error, completed),

    sendPasswordResetEmail: (email, actionCodeSettings) => auth()
      .sendPasswordResetEmail(email, actionCodeSettings)
      .catch(setError),

    setPersistence: (persistence) => auth()
      .setPersistence(persistence)
      .catch(setError),

    signInAndRetrieveDataWithCredential: (credential) => auth()
      .signInAndRetrieveDataWithCredential(credential)
      .catch(setError),

    signInWithCredential: (credential) => auth()
      .signInWithCredential(credential)
      .catch(setError),

    signInAnonymously: () => auth()
      .signInAnonymously()
      .catch(setError),

    signInWithCustomToken: (token) => auth()
      .signInWithCustomToken(token)
      .catch(setError),

    signInWithEmailAndPassword: (email, password) => auth()
      .signInWithEmailAndPassword(email, password)
      .catch(setError),

    signInWithPhoneNumber: (phoneNumber, applicationVerifier) => auth()
      .signInWithPhoneNumber(phoneNumber, applicationVerifier)
      .catch(setError),

    signInWithPopup: (provider) => auth()
      .signInWithPopup(provider)
      .catch(setError),

    signInWithRedirect: (provider) => auth()
      .signInWithRedirect(provider)
      .catch(setError),

    signOut: () => auth()
      .signOut()
      .catch(setError),

    useDeviceLanguage: (e, p) => auth()
      .useDeviceLanguage(e, p)
      .catch(setError),

    verifyPasswordResetCode: (code) => auth()
      .verifyPasswordResetCode(code)
      .catch(setError)
  })

  next()
}

module.exports = fp(fastifyFirebaseAuth, '>=0.30.3')
