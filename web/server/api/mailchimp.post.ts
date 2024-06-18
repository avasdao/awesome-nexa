/* Import modules. */
import mailchimp from '@mailchimp/mailchimp_marketing'

/* Initialize Mailchimp configuration. */
mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us21',
})

const callPing = async () => {
    const response = await mailchimp.ping.get()
    console.log('PING RESPONSE', response)
}

export default defineEventHandler(async (event) => {
    /* Initialize locals. */
    let body
    let email
    let json

    /* Initialize API key. */
    const mailchimpApiKey = process.env.MAILCHIMP_API_KEY
    console.log('MAILCHIMP API KEY', mailchimpApiKey)

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

    callPing() // FOR DEV PURPOSES ONLY

    return {
        status: 'is working!',
        email,
    }
})
