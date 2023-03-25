import { configValue } from "../data/CombinationNumber";

const DISPLAY = document.querySelector('#table_display')

interface Operation {
  [key: string]: (a: number, b: number) => number
}

const operations: Operation = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
};

export const handleSubmit = (e: Event): void => {
  e.preventDefault();
  if (!operations[configValue.simbol]) {
    return undefined;
  }

  const value = operations[configValue.simbol](configValue.value1, configValue.value2);

  const result = <HTMLHeadingElement>document.createElement('h2')
  result.textContent = `${value}`

  DISPLAY?.appendChild(result)

  configValue.value1 = 0
  configValue.value2 = 0
  configValue.simbol = ''
  configValue.started = false
}

