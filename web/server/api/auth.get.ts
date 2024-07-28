/* Import modules. */
import PouchDB from 'pouchdb'

/* Initialize databases. */
const sessionsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.awesomenexa.org/sessions`)

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let session
    let sessionid

    /* Set (request) query. */
    const query = getQuery(event)
    // console.log('QUERY', query)

    /* Set session id. */
    sessionid = query?.sid
    // console.log('SESSION ID', sessionid)

    /* Validate session id. */
    if (!sessionid) {
        return {
            error: 'Not found',
            query,
        }
    }

    /* Save (database) session. */
    session = await sessionsDb
        .get(sessionid)
        .catch(err => console.error(err))
    // console.log('SESSION:', session)

    /* Validate session. */
    if (!session) {
        return {
            error: 'Not found',
            query,
        }
    }

    /* Add ID to session. */
    session = {
        id: session._id,
        ...session,
    }

    /* Sanitize session. */
    delete session._id
    delete session._rev
    delete session.auth
    delete session.challenge

    /* Return session. */
    return session
})
