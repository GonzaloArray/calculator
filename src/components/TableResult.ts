import { configValue } from "../data/CombinationNumber"

const TABLE_RESULT_DOM = <HTMLElement>document.querySelector('#table_result')

export const renderTableResult = () => {
  const result = configValue.operation !== '' ? configValue.result : '0'
  
  TABLE_RESULT_DOM.textContent = result
}
