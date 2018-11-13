import api from '../../util/api'
import{ UPDATE_COLLECT_INFO }from './mutations-type'

const actions = {
    async addInfo ( context, payload) {
        let result = await api.addInfo(payload)
        if( result.status == 200) {
            context.commit({
                type: UPDATE_COLLECT_INFO,
                info: result.info
            })
            return true
        } else if ( result.status == 201) {
            return false
        }
    },
    async startInfo ( context ) {
        let result = await api.getCollectInfo()
        if ( result.status == 200 ) {
            context.commit({
                type: UPDATE_COLLECT_INFO,
                info: result.info
            })
        }
    }
}

export default actions