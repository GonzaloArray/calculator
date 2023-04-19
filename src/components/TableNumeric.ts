import { OPERATION_BUTTONS, Props } from "../data/BTN_CALCULATOR"
import { configValue } from "../data/CombinationNumber";
import { resultReaload } from "./ResultReload";
import { renderTableResult } from "./TableResult";
import { renderSimbolBasic } from "./TableSimbol";
import { formatNumber } from "./helpers/formatNumber";

const TABLE_NUMERIC = document.querySelector('#table_numeric') as HTMLElement;


const handleClick = (number: number): object => {
  
  if (configValue.operation.length === 0) {
    resultReaload()
  }


  if (!configValue.started) {
    configValue.operation += number;
    configValue.started = true
    configValue.stop = false
  } else {
    configValue.operation += number;

    configValue.stop = false
  }

  configValue.result = formatNumber(configValue.operation)

  renderSimbolBasic(OPERATION_BUTTONS)
  renderTableResult()
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

