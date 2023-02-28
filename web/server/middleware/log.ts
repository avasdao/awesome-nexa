/* Import modules. */
import moment from 'moment'
import PouchDB from 'pouchdb'
import { v4 as uuidv4 } from 'uuid'

/* Initialize databases. */
const logsDb = new PouchDB(`http://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@127.0.0.1:5984/logs`)

export default defineEventHandler(async (event) => {
    /* Set headers. */
    const headers = event.node.req.headers
    // console.log('HEADERS', headers)

    /* Build log details. */
    const logDetails = {
        i18n: headers['accept-language'],
        client: headers['user-agent'],
        referer: headers['referer'],
        host: headers['host'],
        ip: headers['x-real-ip'],
        ip_fwd: headers['x-forwarded-for'],
        url: event.node.req.url,
    }

    let success

    success = await logsDb
        .put({
            _id: uuidv4(),
            source: 'headers',
            body: logDetails,
            createdAt: moment().unix(),
        })
    console.log('SUCCESS (logs):', success)

    console.info('LOG (api):', logDetails)
})
