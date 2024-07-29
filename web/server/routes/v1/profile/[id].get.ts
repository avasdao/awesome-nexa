/* Import modules. */
import PouchDB from 'pouchdb'

/* Initialize databases. */
const profilesDb = new PouchDB(`https://${process.env.COUCHDB_USER}:${process.env.COUCHDB_PASSWORD}@db.avasdao.org/profiles`)

export default defineEventHandler(async _event => {
    /* Initialzie locals. */
    let nexid
    let profile
    let web3id

    /* Set id. */
    const id = _event?.context?.params?.id
    console.log('ID', id)

    /* Validate id. */
    if (!id) {
        return {
            error: 'You MUST provide an ID. (see the API Docs -- https://awesomenexa.org/v1)'
        }
    }

    if (id.slice(0, 2) === '0x') {
        web3id = id
    } else {
        nexid = id
    }

    if (nexid) {
        /* Request profiles. */
        profile = await profilesDb
            .get(nexid, {
                include_docs: true,
            })
            .catch(err => console.error(err))
        console.log('PROFILE (nexid)', profile)

    }

    if (web3id) {
        /* Request profiles. */
        profile = await profilesDb
            .get(web3id, {
                include_docs: true,
            })
            .catch(err => console.error(err))
        console.log('PROFILE (web3id)', profile)

    }

    /* Validate profile. */
    if (!profile) {
        return {}
    }

    /* Remove metadata. */
    delete profile._id
    delete profile._rev

    /* Return profile. */
    return profile
})
