import { OPERATION_BUTTONS } from "../data/BTN_CALCULATOR"
import { configValue } from "../data/CombinationNumber"
import { hasDoubleOperator } from "./helpers/getDobleOperator"

const TABLE_OPBASIC = document.querySelector('#table_opBasic') as HTMLElement

interface Props {
  [key: string]: { simbol: string }
}

const handleClick = (btn: string) => {
  
  if (configValue.operation === '' && btn !== '-') return
  
  if (
    configValue.operation === '' ||
    configValue.operation[0] !== '-' && btn === '-' ||
    configValue.operation.length > 1 && btn === '-'
  ) {
    configValue.operation += btn
  }

  if (['+', '/', '*'].includes(btn) && 
      configValue.operation.length >= 1
    ) {
    configValue.operation += btn
  }

  configValue.stop = hasDoubleOperator(btn, configValue.operation.length)
  renderSimbolBasic(OPERATION_BUTTONS)

}

export const renderSimbolBasic = (btnOperation: Props): void => {
  TABLE_OPBASIC.textContent = ''

  Object.entries(btnOperation).forEach(btn => {
    const button = document.createElement('button');
    button.disabled = configValue.stop
    button.classList.add('op-aritmetic')
    button.textContent = btn[1].simbol;

    button.addEventListener('click', () => handleClick(btn[1].simbol));


    TABLE_OPBASIC.appendChild(button)
  })
}