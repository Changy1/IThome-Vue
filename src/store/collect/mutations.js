import {
    UPDATE_COLLECT_INFO
} from './mutations-type'
import _ from 'lodash'
const mutations = {
    [UPDATE_COLLECT_INFO]: (state, payload) => {
        state.info = _.cloneDeep(payload.info)
    }
}

export default mutations