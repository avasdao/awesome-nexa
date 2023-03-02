/* Import modules. */
import moment from 'moment'
import PouchDB from 'pouchdb'
import { Rpc } from 'nexajs'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/logs`)
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/sessions`)

export default defineEventHandler(async (event) => {
    /* Set (request) body. */
    const body = await readBody(event)
    // console.log('BODY (_reg_/auto', body)

    if (!body) {
        return `Authorization FAILED!`
    }

    /* Set profile parameters. */
    const addr = body.addr
    const sig = body.sig
    const cookie = body.cookie
    const hdl = body.hdl

    console.log({
        addr,
        sig,
        cookie,
        hdl,
    })

    /* Set holders. */
    let params
    let result
    let session
    let success

    /* Request session. */
    session = await sessionsDb
        .get(cookie)
        .catch(err => console.error(err))
    console.log('SESSION (cookie):', session)

    if (!session) {
        return `Authorization FAILED!`
    }

    const challenge = session.challenge
    const expiresAt = session.expiresAt

    /* Set authorization parameters. */
    params = [
        addr,
        sig,
        `awesomenexa.org_nexid_reg_${challenge}`,
    ]
    console.log('AUTH PARAMS', params)

    /* Request message verification (from node). */
    success = await Rpc
        .call('verifymessage', params, {
            username: 'user',
            password: 'password',
        })
        .catch(err => console.error(err))
    console.log('AUTH VERIFICATION SUCCESS', success)

    /* Verify challenge. */
    if (success !== true) {
        return `Authorization FAILED!`
    }

    /* Add profile (address + signature) to session. */
    session = {
        profileid: addr,
        auth: sig,
        ...session,
        updatedAt: moment().unix(),
    }

    /* Request database update. */
    result = await sessionsDb
        .put(session)
        .catch(err => console.error(err))
    console.log('SESSION UPDATE:', result)

    /* Return success. */
    return `Authorization SUCCESS!`
})
