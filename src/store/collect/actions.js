import api from '../../util/api'
import{ UPDATE_COLLECT_INFO }from './mutations-type'

const actions = {
    async berforecollect ( context, payload ) {
        let result = await api.havecollect(payload)
        if (result.status === 200) {
            return true
        } else {
            return false
        }
    },
    async changeInfo ( context, payload) {
        let result = await api.changeInfo(payload)
        if( result.status == 200) {
            context.commit({                    //添加state
                type: UPDATE_COLLECT_INFO,
                info: result.info
            })
            return true
        } else if ( result.status == 201) {     //删除之后改变state
            context.commit({
                type: UPDATE_COLLECT_INFO,
                info: result.info
            })
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