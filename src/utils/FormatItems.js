export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return d.toLocaleDateString() + ' às ' + time.substr(0, 5) + time.slice(-2)
}

export function formatObject (obj){
  obj = obj 
  ? obj.reduce((obj,item)=> {
    obj[item.id]=item
    return obj
  },{})
  : {}
  return obj
}
