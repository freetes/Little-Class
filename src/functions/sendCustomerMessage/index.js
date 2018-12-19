// 云函数入口文件
const cloud = require('wx-server-sdk')
const request = require('request')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  request.post({
    url: `https://api.weixin.qq.com/cgi-bin/message/custom/send?access_token=${event.access_token}`, 
    form: {      
      access_token: event.access_token,
      touser: 'oApC45RC09Ka1kcCibuEEqTV0yAg',
      template_id: '6HGFJCSpinhS2nuQKjygJtU5LGh1lXDmNArhfaah1Es',
      form_id: event.form_id
    }
  }, 
    function (error, response, body) {
      if(error) return error
      return response
    }
  );
}