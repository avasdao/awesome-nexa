export default defineEventHandler(async (event) => {
    /* Set (request) body. */
    const body = await readBody(event)
    console.log('BODY (_reg_/auto', body)

    // BODY (_reg_/auto {
    //     op: 'reg',
    //     addr: 'nexa:qra4l7xn7t9kpppnxy5u7xe40jltsghggvmtr4jz0z',
    //     sig: 'IJxW6F+OESF3Vwpg/S/5HgKcnJODI3otku+TJWLCo4XFVUSfKtz4l17yIuGZzxg4DPZDbWep/gjGkpEvf9+H5Ws=',
    //     cookie: '833ea884-71a2-4bee-9cdf-45fe4c0350bb',
    //     hdl: 'Londynn'
    // }


    return {
        success: true,
    }
})
