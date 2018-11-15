
import BetterScroll from 'better-scroll'
import { Toast } from 'mint-ui'

const scroll = ({
    el, // 拉动刷新的元素
    handler,// 拉动刷新的处理函数
    onscroll
}) => {
    let scroll = new BetterScroll(el, {
        probeType: 2,
        pullUpLoad: { //配置上拉加载
            threshold: 50 // 距离底部多少距离
        },
        click: true
    })

    scroll.on('pullingUp', async () => {
        Toast({
            message: '正在加载...',
            position: 'middle',
            className: 'toast',
            duration: 1000
        });
        await handler()
        scroll.finishPullUp()       // 解决拉动刷新 // 可以多次执行上拉刷新
        scroll.refresh()            // 重新计算
    })
    scroll.on('scroll', () => {
        onscroll(scroll.y)
    })
    return scroll
}

export default scroll