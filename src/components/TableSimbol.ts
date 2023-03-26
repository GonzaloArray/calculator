import { OPERATION_BUTTONS } from "../data/BTN_CALCULATOR"
import { configValue } from "../data/CombinationNumber"

const TABLE_OPBASIC = document.querySelector('#table_opBasic') as HTMLElement

interface Props {
  [key: string]: { simbol: string }
}

const handleClick = (btn: string) => {
  configValue.operation += btn
  configValue.stop = true
  console.log(configValue)
  renderSimbolBasic(OPERATION_BUTTONS)
}

export const renderSimbolBasic = (btnOperation: Props): void => {
  TABLE_OPBASIC.textContent = ''

  Object.entries(btnOperation).forEach(btn => {
    const DIV_CONTAINER = <HTMLElement>document.createElement('div')

    const button = document.createElement('button');
    button.disabled = configValue.stop
    button.textContent = btn[0];

    button.addEventListener('click', () => handleClick(btn[1].simbol));

    DIV_CONTAINER.appendChild(button);

    TABLE_OPBASIC.appendChild(DIV_CONTAINER)
  })
}