import { OPERATION_BUTTONS, Props } from "../data/BTN_CALCULATOR"
import { configValue } from "../data/CombinationNumber";
import { renderSimbolBasic } from "./TableSimbol";

const TABLE_NUMERIC = document.querySelector('#table_numeric') as HTMLElement;


const handleClick = (number: number): object => {
  if (!configValue.started) {
    configValue.operation += number
    configValue.started = true
    console.log(configValue.operation)
  } else {
    configValue.operation += number
    configValue.stop = false
    console.log(configValue.operation)
  }

  renderSimbolBasic(OPERATION_BUTTONS)
  return configValue
}

export const renderBtnNumeric = (btns: Props[]): void => {
  btns.forEach(btn => {
    const { num } = btn

    const button = document.createElement('button');
    button.textContent = `${num}`;

    button.addEventListener('click', () => handleClick(num));
    
    TABLE_NUMERIC.appendChild(button)
  })
}

