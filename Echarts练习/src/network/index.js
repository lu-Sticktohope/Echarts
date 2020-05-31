import { headquarter } from './axios'
import init from './config';
function data(params) {//循环拼接参数
    var val = '?';
    for (let i in params) {
        val += `${i}=${params[i]}&`
    }
    val = val.substring(0, val.length - 1)
    return val
}



const login = (value) => {
    return headquarter(init.path.POST, init.url.login, data(value))
}
const initData = () => {
    return headquarter(init.path.GET, init.url.initData, '')
}
const statistic = () => {
    return headquarter(init.path.GET, init.url.statistic, '')
}
const orderList = (value) => {
    return headquarter(init.path.GET, init.url.orderList, data(value))
}
const productList = (value) => {
    return headquarter(init.path.GET, init.url.productList, data(value))
}




export const bus = {
    login,
    initData,
    statistic,
    orderList,
    productList
}