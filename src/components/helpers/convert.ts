import { configValue } from "../../data/CombinationNumber"
import { indexLastStatus } from "./indexLastStatus"

interface Config {
  result: number,
  currentValue: string
}

export const getConvert = (start:number, last: number): Config => {
  let result: number
  let convert: number
  
  const data = configValue.operation.slice(start, last + 1)
  convert = parseInt(data, 10)

  result = convert * convert

  const currentValue = configValue.operation.slice(0, start + 1)

  return {
    result,
    currentValue
  }
}


export const handleConvert = (option: string): void => {
  const lastOpeartor = indexLastStatus()
  const lastIndex = configValue.operation.length - 1

  let result:Config

  if (
    option === 'elevado' &&
    lastOpeartor === -1 &&
    lastIndex >= 0
  ) {
    
    result = getConvert(0, lastIndex)    
    configValue.operation = `${result.result}`
    console.log(configValue.operation)

  } else if (
    option === 'elevado' && lastOpeartor >= 1 && lastIndex >= 0) {

    result = getConvert(lastOpeartor, lastIndex)
    configValue.operation = `${result.currentValue}${result.result}`
    console.log(configValue.operation)
  }
}
