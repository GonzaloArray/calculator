import { configValue } from "../data/CombinationNumber"

const TABLE_RESULT_DOM = <HTMLElement>document.querySelector('#table_result')

export const renderTableResult = () => {
  const result = configValue.operation !== '' ? configValue.operation : '0'
  
  TABLE_RESULT_DOM.textContent = result
}
