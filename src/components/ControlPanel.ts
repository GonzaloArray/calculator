import { configValue } from "../data/CombinationNumber";
import { CleanConfig } from "../data/panel_control/DATA";

const CONTROL_PANEL = document.querySelector('#control_panel');
const DISPLAY = <HTMLElement>document.querySelector('#table_display')


const indexLastStatus = () => {
  const patron: RegExp = /[-+*/](?!.*[-+*/])/;
  const operation: string = configValue.operation;
  const lastOperatorIndex: number = operation.search(patron);
  
  
  return lastOperatorIndex
}


const handleClean = (status: string) => {
  if (status === 'partial') {
    const lastIndex = configValue.operation.length - 1

  
    const indexStart = indexLastStatus()
    const data = configValue.operation[lastIndex]

    if (!isNaN(parseInt(data))) {
      const statusChange = configValue.operation.slice(0, indexStart + 1)
      
      configValue.operation = statusChange
    }
  } 
  
  if (status === 'clean') {
    configValue.operation = ''    
    configValue.started = false
    DISPLAY.textContent = '0'  
  }

}

export const renderClenButton = (data: CleanConfig[] ) => {
  
  data.forEach(cleanbtn => {
    const btn = document.createElement('button')
    btn.textContent = cleanbtn.value
    btn.addEventListener('click', () => handleClean(cleanbtn.option))
    CONTROL_PANEL?.appendChild(btn)
  })

}
