import { configValue } from "../data/CombinationNumber";
import { CleanConfig } from "../data/panel_control/DATA";
import { indexLastStatus } from "./helpers/indexLastStatus";
import { renderTableResult } from "./TableResult";

const CONTROL_PANEL = document.querySelector('#control_panel');
const DISPLAY = <HTMLElement>document.querySelector('#table_display')

const handleClean = (status: string) => {
  const lastIndex = configValue.operation.length - 1
  
  if (status === 'partial') {
    const indexStart = indexLastStatus()
    const data = configValue.operation[lastIndex]

    if (!isNaN(parseInt(data))) {
      const statusChange = configValue.operation.slice(0, indexStart + 1)
      
      configValue.operation = statusChange
    }
  } 
  
  if (status === 'clean') {
    configValue.operation = ''    
    configValue.result = ''    
    configValue.started = false
    DISPLAY.textContent = '0'  
  }

  if (status === 'remove') {
    const data =  configValue.operation.slice(0, lastIndex)
    configValue.operation = data
  }

  renderTableResult()

}

export const renderClenButton = (data: CleanConfig[] ) => {
  
  data.forEach(cleanbtn => {
    const btn = document.createElement('button')
    btn.classList.add('clean')
    btn.textContent = cleanbtn.value
    btn.addEventListener('click', () => handleClean(cleanbtn.option))
    CONTROL_PANEL?.appendChild(btn)
  })

}
