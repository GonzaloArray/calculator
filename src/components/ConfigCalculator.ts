import { configStatus } from "../types/config"

const SECTION_OPTION = <HTMLDivElement>document.querySelector('#template_config')

// TODO: realizar la logica de pasar de cientifica a standar y viceversa
const handleClick = ({ id }: Partial<configStatus>) => {
  console.log(id)
}

export const renderOptions = (config: configStatus[]) => {
  config.forEach(status => {
    const btn = document.createElement('button')
    btn.textContent = status.option
    btn.addEventListener('click', () => handleClick(status))


    SECTION_OPTION.appendChild(btn)
  })
}