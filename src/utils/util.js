

function getDate(date){
  var year = date.getFullYear(), month = date.getMonth() + 1, day = date.getDate()
  return `${year}年${month}月${day}日`
}

function isAfter(date){
  let now = Date.now()
  date = new Date(date)

  return now <= date.getTime()
}

module.exports = {
  getDate,
  isAfter
}