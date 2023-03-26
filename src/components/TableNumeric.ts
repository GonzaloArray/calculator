import { OPERATION_BUTTONS, Props } from "../data/BTN_CALCULATOR"
import { configValue } from "../data/CombinationNumber";
import { renderSimbolBasic } from "./TableSimbol";

const TABLE_NUMERIC = document.querySelector('#table_numeric') as HTMLElement;


const handleClick = (number: number): object => {
  if (!configValue.started) {
    configValue.operation += number
    configValue.started = true
  } else {
    configValue.operation += number
    configValue.stop = false
  }

  renderSimbolBasic(OPERATION_BUTTONS)
  return configValue
}

export const renderBtnNumeric = (btns: Props[]): void => {
  btns.forEach(btn => {
    const { num } = btn

    const DIV_CONTAINER = <HTMLElement>document.createElement('div')

    const button = document.createElement('button');
    button.textContent = `${num}`;

    button.addEventListener('click', () => handleClick(num));

    DIV_CONTAINER.appendChild(button);

    TABLE_NUMERIC.appendChild(DIV_CONTAINER)
  })
}

