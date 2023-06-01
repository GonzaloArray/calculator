interface Operation {
  result: string,
  operation: string,
  started: boolean,
  stop: boolean
}

export const configValue: Operation = {
  result: '',
  operation: '',
  started: false,
  stop: false
}