import Vue from 'vue'
import VueMatomo from 'vue-matomo'

export default ({ app }) => {
    Vue.use(VueMatomo, {
        router: app.router,

        // Matomo server configuration
        host: 'https://matomo.avasdao.org',
        siteId: 5,
    })
}
