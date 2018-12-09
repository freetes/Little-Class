// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  return await db.collection('checks').doc(event.check_id)
  .update({
    data: {
      members: _.push(event.check_info)
    },
  })
}
