// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  let groupRes = await db.collection('groups').doc(event.group_id).get()

  for(let i=0; i<groupRes.data.members.length; i++){
    if(groupRes.data.members[i].user_id == event.user_id){
      groupRes.data.members.splice(i, 1)
      break
    }
  }

  return await db.collection('groups').doc(event.group_id).update({
    data: {
      members: _.set(groupRes.data.members)
    }
  })
}
