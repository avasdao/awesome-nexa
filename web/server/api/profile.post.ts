/* Import modules. */
import { ethers } from 'ethers'
import moment from 'moment'
import PouchDB from 'pouchdb'

/* Initialize databases. */
const profilesDb = new PouchDB(`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@${process.env.AVASDAODB_ENDPOINT}/profiles`)
const sessionsDb = new PouchDB(`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@${process.env.COUCHDB_ENDPOINT}/sessions`)

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let message
    let nickname
    let profile
    let result
    let session
    let sessionid
    let sig
    let profileid

    /* Set (request) body. */
    body = await readBody(event)
    console.log('BODY (_reg_/auto', body)

    /* Validate body. */
    if (!body) {
        return `Authorization FAILED!`
    }

    /* Set profile parameters. */
    sessionid = body.sessionid
    nickname = body.nickname

    console.log({
        sessionid,
        nickname,
    })

    /* Request session. */
    session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    console.log('SESSION', session)

    if (!session) {
        return `Authorization FAILED!`
    }

    /* Set profile id. */
    profileid = session.profileid


    /* Verify profile id. */
    if (typeof profileid === 'undefined' || profileid === null) {
        return `Authorization FAILED!`
    }

    /* Request profile. */
    profile = await profilesDb
        .get(profileid)
        .catch(err => console.error(err))
    console.log('PROFILE:', profile)

    console.log('NICKNAME', nickname)

    if (nickname) {
// FIXME CHECK FOR DUPLICATES

        profile.nickname = nickname

        /* Request profile update. */
        result = await profilesDb
            .put(profile)
            .catch(err => console.error(err))
        console.log('PROFILE UPDATE:', result)

    }

    /* Return success. */
    return `Authorization SUCCESS!`
})
