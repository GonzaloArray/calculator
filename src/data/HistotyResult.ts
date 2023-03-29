import { HistotyProps } from "../types/interface"

export let HISTORY: HistotyProps[] = []

export const addHistory = (data: HistotyProps):void => {

  const newHistory = [...HISTORY, data]

  HISTORY = newHistory
}