interface Operation {
  operation: string,
  started: boolean,
  stop: boolean
}

export const configValue: Operation = {
  operation: '',
  started: false,
  stop: false
}