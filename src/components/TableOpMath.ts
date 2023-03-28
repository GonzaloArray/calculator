import { ConfigExtend } from "../data/BTN_OP_MATH"
import { handleConvert } from "./helpers/convert"
import { renderTableResult } from "./TableResult"

const TABLE_OP_MATH = document.querySelector('#table_opMath')

const handleClick = (option: string) => {
  
  handleConvert(option)
  renderTableResult()
}

export const renderOpMath = (opMath: ConfigExtend[]) => {
  opMath.forEach(op => {
    const { option } = op
    const button = <HTMLButtonElement>document.createElement('button')
    button.disabled = op.option !== 'elevado'
    button.classList.add('op-aritmetic')
    button.addEventListener('click', () => handleClick(option))
    button.textContent = op.value
    

    TABLE_OP_MATH?.appendChild(button)
  })

}