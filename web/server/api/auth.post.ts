/* Import modules. */
import { ethers } from 'ethers'
import moment from 'moment'
import PouchDB from 'pouchdb'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/logs`)
const profilesDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/profiles`)
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/sessions`)

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let message
    let profile
    let result
    let session
    let sessionid
    let sig
    let profileid

    /* Set (request) body. */
    body = await readBody(event)
    // console.log('BODY (_reg_/auto', body)

    /* Validate body. */
    if (!body) {
        return `Authorization FAILED!`
    }

    /* Set profile parameters. */
    sessionid = body.sessionid
    message = body.message
    sig = body.sig

    console.log({
        sessionid,
        message,
        sig,
    })

    /* Request session. */
    session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    console.log('SESSION', session)

    if (!session) {
        return `Authorization FAILED!`
    }

    // FIXME Validate TIME!!
    if (!message.includes('Awesome Nexa Authorization')) {
        return `Authorization FAILED!`
    }

    profileid = ethers.verifyMessage(message, sig)
    console.log('VERIF (profileid)', profileid)

    /* Verify profile id. */
    if (typeof profileid === 'undefined') {
        return `Authorization FAILED!`
    }

    /* Add profile (address + signature) to session. */
    session = {
        profileid,
        auth: sig,
        ...session,
        updatedAt: moment().unix(),
    }

    /* Request session update. */
    result = await sessionsDb
        .put(session)
        .catch(err => console.error(err))
    // console.log('SESSION UPDATE:', result)

    /* Request profile. */
    profile = await profilesDb
        .get(profileid)
        .catch(err => console.error(err))
    // console.log('PROFILE:', profile)

    if (!profile) {
        /* Create NEW profile. */
        profile = {
            _id: profileid,
            // nickname,
            // email,
            auths: 1,
            createdAt: moment().unix(),
        }
    } else {
        profile = {
            ...profile,
            auths: profile.auths + 1,
            updatedAt: moment().unix(),
        }
    }

    /* Request profile update. */
    result = await profilesDb
        .put(profile)
        .catch(err => console.error(err))
    // console.log('PROFILE UPDATE:', result)

    /* Return success. */
    return `Authorization SUCCESS!`
})
