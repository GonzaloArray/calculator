export interface configStatus{
  id: string,
  option: string
}

export interface ConfigExtend extends configStatus {
  value: string
}