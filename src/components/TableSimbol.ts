import { configValue } from "../data/CombinationNumber"

const TABLE_OPBASIC = document.querySelector('#table_opBasic') as HTMLElement

interface Props {
  [key: string]: { simbol: string }
}

const handleClick = (btn: string) => {
  configValue.simbol = btn

  console.log(configValue)
}

export const renderSimbolBasic = (btnOperation: Props): void => {
  Object.entries(btnOperation).forEach(btn => {
    const DIV_CONTAINER = <HTMLElement>document.createElement('div')

    const button = document.createElement('button');
    button.textContent = btn[0];

    button.addEventListener('click', () => handleClick(btn[1].simbol));

    DIV_CONTAINER.appendChild(button);

    TABLE_OPBASIC.appendChild(DIV_CONTAINER)
  })
}