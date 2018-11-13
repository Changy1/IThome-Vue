import _ from 'lodash'

const api = {
    addInfo ({ id, title, time, img }) {
        return new Promise( resolve => {
            setTimeout(async() => {
                let { info } = await this.getCollectInfo()
                let oneinfo = _.find(info, item => item.id === id)
                if ( oneinfo ){             //如果已经存在这个info的话，那就直接返回201了，说明已经收藏过了
                    resolve({
                        status: 201      
                    })
                } else {                    //如果没有的话就添加进去再修改localStorage
                    info.push ({
                        id, title, time, img
                    })
                }

                this.changeCollectInfo( info )
                resolve ({ status:200, info})
            },200)
        })
    },
    getCollectInfo () {
        return new Promise( resolve => {
            setTimeout( () => {
                resolve({
                    status: 200,
                    info: localStorage.info ? JSON.parse(localStorage.info) : []
                })
            },200)
        })
    },
    changeCollectInfo (info) {
        localStorage.info = JSON.stringify( info )
    }

}

export default api