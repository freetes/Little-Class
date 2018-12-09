

function getDate(date){
  var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate()
  return `${year}年${month}月${day}日`
}

module.exports = {
  getDate
}