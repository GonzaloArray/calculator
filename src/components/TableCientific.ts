import { BTN_CIENTIFIC } from "../data/BTN_CiENTIFIC"

const table_cientific = <HTMLElement>document.querySelector('#table_cientific')
const handleClick = (option: string): void => {
  
  console.log(option)
}
export const renderPanelCientific = () => {
  cleanCientific()
  
  BTN_CIENTIFIC.forEach(op => {
    const { option } = op
    const button = <HTMLButtonElement>document.createElement('button')
    button.classList.add('op-aritmetic')
    button.addEventListener('click', () => handleClick(option))
    button.textContent = op.value
    

    table_cientific?.appendChild(button)
  })
}

export const cleanCientific = () => {
  if (table_cientific) {
    table_cientific.textContent = ''
  }
}