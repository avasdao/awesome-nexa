/* Import modules. */
import { ethers } from 'ethers'
import moment from 'moment'
import PouchDB from 'pouchdb'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/logs`)
const profilesDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/profiles`)
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/sessions`)

export default defineEventHandler(async (event) => {
    /* Set (request) body. */
    const body = await readBody(event)
    console.log('BODY (_reg_/auto', body)

    if (!body) {
        return `Authorization FAILED!`
    }

    /* Set profile parameters. */
    const sessionid = body.sessionid
    const message = body.message
    const sig = body.sig

    console.log({
        sessionid,
        message,
        sig,
    })

    /* Set holders. */
    let params
    let profile
    let result
    let session
    let profileid

    /* Request session. */
    session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    console.log('SESSION', session)

    if (!session) {
        return `Authorization FAILED!`
    }

    const challenge = session.challenge
    const expiresAt = session.expiresAt


// FIXME ***WILL AUTHORIZE ANY VALID SIG***
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
    console.log('SESSION UPDATE:', result)

    /* Request profile. */
    profile = await profilesDb
        .get(profileid)
        .catch(err => console.error(err))
    console.log('PROFILE:', profile)

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
    console.log('PROFILE UPDATE:', result)

    /* Return success. */
    return `Authorization SUCCESS!`
})
