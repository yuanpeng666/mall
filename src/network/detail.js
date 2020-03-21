import {request} from './request'

export function getDetaildata(iid){
  return request({
    url:'/detail',
    params: {
      iid
    }
  })
}