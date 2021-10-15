import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: 'home/multidata'
  })
//  此request的函数的返回值是一个Promise,可以在调用的时候直接.then拿到结果
}

export function  getHomeGoods(type,page){
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })

}

//需求：将num1加入到totalNums中
let totalNums = []
const num1 = [123,32,2]
const num2 = [23,332,254]

//1：遍历
// for(let n of num1){
//   totalNums.push(n)
// }

//2. ...num1:将num1中的数据一个一个拿出来然后push到数组TotalNums中
totalNums.push(...num1)
