import { configStatus } from "../types/config"

export interface ConfigExtend extends configStatus {
  value: string
}

export const OP_MATH: ConfigExtend[] = [
  {
    id: 'asdf123123fssdf123123asdf',
    option: 'elevado',
    value: 'x^2'
  },
  {
    id: 'edww1d12d2131',
    option: 'raiz',
    value: '√'
  },
  {
    id: 'edww1d12d2131',
    option: 'porcentaje',
    value: '%'
  }
]