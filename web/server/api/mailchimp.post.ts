export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let email
    let json

    /* Initialize API key. */
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    console.log('MAILCHIMP API KEY', mailchimpApiKey)

    /* Set authorization. */
    // const context = event.context
    // console.log('MAILCHIMP', context)

    // if (auth.profileid !== 1337) {
    //     throw createError({
    //         statusCode: 401,
    //         statusMessage: 'You are NOT an authorized administrator.',
    //     })
    // }

    /* Set (request) body. */
    body = await readBody(event)
    // console.log('BODY', body)

    try {
        json = JSON.parse(body)
        console.log('JSON', json)

        email = json.email
        console.log('EMAIL', email)
    } catch (err) {
        console.error(err)
    }
    // console.log('BODY', JSON.stringify(body, null, 2))

    return {
        status: 'is working!',
        email,
    }
})
