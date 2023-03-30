import { configValue } from "../data/CombinationNumber";
import { addHistory } from "../data/HistotyResult";
import { resolveOperations } from "../helpers/operations";
import { getDate } from "./helpers/getDate";
import { Alert } from "./MsgAlert";
import { renderHistory } from "./TableHistory";

const DISPLAY = <HTMLElement>document.querySelector('#table_display')

export const handleSubmit = (e: Event): void => {
  e.preventDefault();

  const length = configValue.operation.length

  if (
      !['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(configValue.operation[length - 1])  &&
      !['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(configValue.operation[length - 2]) ||
      !['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].includes(configValue.operation[length - 1]) 
    ) {
    return
  }

  const valor = resolveOperations(configValue.operation)

  const data = `${configValue.operation} = ${valor}`

  if (!valor && valor !== 0) {
    DISPLAY.textContent = Alert('Ingrese un valor')
    return
  }

  addHistory({
    id: Date.now(),
    operation: data,
    currentDate: getDate()
  })

  renderHistory()

  DISPLAY.innerText = `${valor}`

  configValue.operation = ''
}

