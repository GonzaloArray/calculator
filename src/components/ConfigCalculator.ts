import { configStatus } from "../types/config"
import { cleanCientific, renderPanelCientific } from "./TableCientific"

const SECTION_OPTION = <HTMLDivElement>document.querySelector('#template_config')

// TODO: realizar la logica de pasar de cientifica a standar y viceversa
// TODO: realizar una consulta al chatgpt sobre como implemntar mejor el parametro string para que sea más estricto el resultado

const handleChange = (option: string) => {
  if (option === 'cientific') {
    renderPanelCientific()
  }else if (option === 'standard') {
    cleanCientific()
  }
}

export const renderOptions = (config: configStatus[]) => {
  const selector = <HTMLSelectElement>document.createElement('select')
  selector.classList.add('selector')
  selector.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    handleChange(target.value);
  });
  
  config.forEach(status => {
    
    const option = document.createElement('option')
    option.textContent = status.option
    option.value = status.option

    selector.appendChild(option)
    SECTION_OPTION.appendChild(selector)
  })
}