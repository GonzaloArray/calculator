import { configValue } from "../data/CombinationNumber"
import { ConfigExtend } from "../types/config"
import { handleConvert } from "./helpers/convert"
import { indexLastStatus } from "./helpers/indexLastStatus"
import { renderTableResult } from "./TableResult"

const TABLE_OP_MATH = document.querySelector('#table_opMath') as HTMLElement

const handleClick = (option: string): void => {
  
  const lastOpeartor = indexLastStatus()
  const lastIndex = configValue.operation.length - 1

  const data = {
    start: lastOpeartor,
    last: lastIndex,
    option: option
  }

  handleConvert(data)

  renderTableResult()
}

export const renderOpMath = (opMath: ConfigExtend[]) => {

  if (TABLE_OP_MATH) {
    TABLE_OP_MATH.textContent = '';
  }

  opMath.forEach(op => {
    const { option } = op
    const button = <HTMLButtonElement>document.createElement('button')
    button.classList.add('op-aritmetic')
    button.addEventListener('click', () => handleClick(option))
    button.textContent = op.value
    

    TABLE_OP_MATH?.appendChild(button)
  })

}