/* Import modules. */
import PouchDB from 'pouchdb'
import { Rpc } from 'nexajs'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/logs`)
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/sessions`)

export default defineEventHandler(async (event) => {
    /* Set (request) body. */
    const body = await readBody(event)
    console.log('BODY (_reg_/auto', body)

    if (!body) {
        return `Authorization FAILED!`
    }

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

    let result

    result = await sessionsDb
        .get(cookie)
        .catch(err => console.error(err))
    console.log('RESULT (cookie):', result)

    return `Authorization SUCCESS!`
})
