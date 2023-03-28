import { configStatus } from "../../types/config"

export interface CleanConfig extends configStatus {
  value: string
}

export const DATA_PANEL_CONTROL: CleanConfig[] = [
  {
    id: 'asdfasdf1123edascgrñwe',
    option: 'partial',
    value: 'CE'
  },
  {
    id: 'asdfasdf1123edascgrñwe',
    option: 'clean',
    value: 'C'
  },
  {
    id: 'asdfasdf1123edascgrñwe',
    option: 'remove',
    value: '<x'
  }
]