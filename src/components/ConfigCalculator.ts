import { configStatus } from "../types/config"

const SECTION_OPTION = <HTMLDivElement>document.querySelector('#template_config')

// TODO: realizar la logica de pasar de cientifica a standar y viceversa
const handleClick = (id: string) => {
  console.log(id)
}

export const renderOptions = (config: configStatus[]) => {
  const selector = <HTMLSelectElement>document.createElement('select')
  selector.classList.add('selector')
  selector.addEventListener('change', (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    handleClick(target.value);
  });
  
  config.forEach(status => {
    
    const option = document.createElement('option')
    option.textContent = status.option
    option.value = status.id

    selector.appendChild(option)
    SECTION_OPTION.appendChild(selector)
  })
}