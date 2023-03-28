import { configValue } from "../../data/CombinationNumber";

export const indexLastStatus = () => {
  const patron: RegExp = /[-+*/](?!.*[-+*/])/;
  const operation: string = configValue.operation;
  const lastOperatorIndex: number = operation.search(patron);


  return lastOperatorIndex
}