import wepy from 'wepy'

const BASEURL = 'https://api.grayclass.site/api'
const TESTURL = 'http://localhost:2333/api'

let request = {
  get: async (url, data)=>{
    let res = await wepy.request({
      url: TESTURL + url,
      method: 'GET',
      data: data,
    })

    // 测试
    console.log(res.data)

    return res.data
  },
  post: async (url, data)=>{
    let res = await wepy.request({
      url: TESTURL + url,
      method: 'POST',
      data: data,
    })

    // 测试
    console.log(res.data)

    return res.data
  }
}

module.exports = request