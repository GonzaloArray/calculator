import { configValue } from "../data/CombinationNumber";
import { resolveOperations } from "../helpers/operations";

const DISPLAY = <HTMLElement>document.querySelector('#table_display')


export const handleSubmit = (e: Event): void => {
  e.preventDefault();

  const valor = resolveOperations(configValue.operation)

  DISPLAY.innerText = `${valor}`


}

