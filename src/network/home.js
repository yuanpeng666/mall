import {request} from './request'

// Home多个数据
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}
// Home商品列表数据
export function getHomeGoodsdata(type, page){
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}
