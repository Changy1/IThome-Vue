import _ from 'lodash'

const api = {
    changeInfo ({ id, title, time, img }) {
        return new Promise( resolve => {
            setTimeout(async() => {
                let { info } = await this.getCollectInfo()
                let oneinfo = _.find(info, item => item.id === id)
                if ( oneinfo ){             //如果已经存在这个info的话，就将它删除
                    _.remove(info, item => item.id === id) 
                    this.changeCollectInfo( info )
                    resolve({ status: 201, info})             //让他退出这个函数不执行下面
                } else {                    //如果没有的话就添加进去再修改localStorage
                    info.push ({
                        id, title, time, img
                    })
                    this.changeCollectInfo( info )
                    resolve ({ status:200, info})
                }
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
    },
    havecollect (id) {
        return new Promise( resolve => {
            setTimeout( () => {
                let info = localStorage.info ? JSON.parse(localStorage.info) : []
                let oneinfo = _.find( info, item => item.id === id)
                if( oneinfo ){
                    resolve({
                        status: 200,
                    })
                } else {
                    resolve({
                        status: 201
                    })
                }
            },200)
        })
    }
}

export default api