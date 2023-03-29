import { configValue } from "../data/CombinationNumber";
import { addHistory } from "../data/HistotyResult";
import { resolveOperations } from "../helpers/operations";
import { getDate } from "./helpers/getDate";
import { renderHistory } from "./TableHistory";

const DISPLAY = <HTMLElement>document.querySelector('#table_display')

export const handleSubmit = (e: Event): void => {
  e.preventDefault();

  const valor = resolveOperations(configValue.operation)

  const data = `${configValue.operation} = ${valor}`

  addHistory({
    id: Date.now(),
    operation: data,
    currentDate: getDate()
  })

  renderHistory()

  DISPLAY.innerText = `${valor}`
}

