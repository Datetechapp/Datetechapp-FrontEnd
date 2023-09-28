
export const Hightlight = (props:any) => {
    const { filter, str } = props
    if (!filter) return str
    const regexp = new RegExp(filter, 'ig')
    const matchValue = str.match(regexp)
  
    if (matchValue) {
      console.log('matchValue', matchValue)
      console.log('str.split(regexp)', str.split(regexp))
  
      return str.split(regexp).map((s:any, index:any, array:any) => {
        if (index < array.length - 1) {
          const c = matchValue.shift()
          return <>{s}<span className={'hightlight'}>{c}</span></>
        }
        return s
      })
    }
    return str
  }