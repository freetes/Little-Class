import wepy from 'wepy'

const BASEURL = 'https://api.grayclass.site:2333/api'
const TESTURL = 'https://localhost:2333/api'

let request = {
  get: async (url, data)=>{
    let res = await wepy.request({
      url: BASEURL + url,
      method: 'GET',
      data: data,
    })

    return res.data
  },
  post: async (url, data)=>{
    let res = await wepy.request({
      url: BASEURL + url,
      method: 'POST',
      data: data,
    })

    return res.data
  }
}

module.exports = request