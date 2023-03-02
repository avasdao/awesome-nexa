/* Import modules. */
import moment from 'moment'
import PouchDB from 'pouchdb'
import { v4 as uuidv4 } from 'uuid'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/logs`)
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/sessions`)

export default defineEventHandler(async (event) => {
    /* Initialize session id. */
    let sessionid

    /* Set (request) query. */
    const query = getQuery(event)
    console.log('QUERY', query)

    sessionid = 'my-session'

    /* Save (database) session. */
    const session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    console.log('SESSION:', session)

    /* Return session. */
    return session
})
