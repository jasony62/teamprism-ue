import axios from '@/tms/apis/axios2'

export default {
    /**
     * 获得频道
     * 
     * @param {String} appId 
     */
    skeleton(appId) {
        return axios.get(`/api/ue/matter/link/get?app=${appId}`)
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))

    },
    /**
     * 获得单图文封面信息
     * 
     * @param {String} appId 
     */
    cover(appId) {
        return axios.get(`/api/ue/matter/link/cover?app=${appId}`)
            .then(rst => rst.data.result)
            .catch(err => Promise.reject(err))
    }
}