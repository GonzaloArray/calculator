export interface Props {
  num: number
}
export const BASIC = {
  suma: 'suma',
  resta: 'resta',
  division: 'division',
  multiplicacion: 'multiplicacion'
} as const

export const BTN_NUMERIC_CONFIG: Array<Props> = [
  {
    num: 0
  },
  {
    num: 1
  },
  {
    num: 2
  },
  {
    num: 3
  },
  {
    num: 4
  },
  {
    num: 5
  },
  {
    num: 6
  },
  {
    num: 7
  },
  {
    num: 8
  },
  {
    num: 9
  }
]
export const OPERATION_BUTTONS = {
  [BASIC.suma]: {
    simbol: '+',
  },
  [BASIC.resta]: {
    simbol: '-',
  },
  [BASIC.multiplicacion]: {
    simbol: '*',
  },
  [BASIC.division]: {
    simbol: '/',
  }
} as const