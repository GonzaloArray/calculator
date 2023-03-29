import { configValue } from "../../data/CombinationNumber"


interface Config {
  result: number,
  currentValue: string
}
interface Props {
  start: number,
  last: number,
  option: string
}

export const getConvert = ({
  last,
  start,
  option
}: Props): Config => {

  let result: number = 0
  let convert: number = 0
  
  const data = configValue.operation.slice(start, last + 1)
  
  convert = parseInt(data, 10)

  const currentValue = configValue.operation.slice(0, start + 1)

  if (option === 'elevado') {
    result = convert * convert;
  } else if (option === 'raiz') {
    result = Math.sqrt(convert);
  } else if (option === 'porcentaje') {
    result = convert * 0.01;
  }

  return {
    result,
    currentValue
  }
}

export const handleConvert = ({start, last, option}: Props): void => {

  const startvalue:number = start === -1 ? 0 : start

  if (start < 0 && last < 0) return

  const data = getConvert({
    start: startvalue,
    last,
    option
  })
  console.log(data, start)
  const result = startvalue === 0 
  ? `${data.result}`
  : `${data.currentValue}${data.result}`

  configValue.operation = result
}
