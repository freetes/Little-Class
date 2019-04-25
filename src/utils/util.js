

function getDate(date){
  let year = date.getFullYear(), 
      month = date.getMonth() + 1, 
      day = date.getDate();

  return `${year}-${month}-${day}`
}

function getTime(date){
  let year = date.getFullYear(), 
      month = date.getMonth() + 1, 
      day = date.getDate(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getSeconds()

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}

function isAfter(date){
  let now = Date.now()
  date = new Date(date)

  return now <= date.getTime()
}

module.exports = {
  getDate,
  getTime,
  isAfter
}