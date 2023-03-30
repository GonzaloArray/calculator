import { HISTORY } from "../data/HistotyResult"
import { HistotyProps } from "../types/interface";

const TABLE_HISTORY = document.querySelector('#table_history')

export const renderHistory = () => {

  if (TABLE_HISTORY) {
    TABLE_HISTORY.textContent = '';
  }
  
  if(HISTORY.length === 0  ){
    const data = document.createElement('h2');
    data.classList.add('history');
    data.textContent = 'History empty'

    TABLE_HISTORY?.appendChild(data)
  }

  // TODO: Realizar el delete del historial
  HISTORY.forEach(({id, operation, currentDate}:HistotyProps ): void => {

    const info = <HTMLDivElement>document.createElement('div')
    info.classList.add('history_container')

    const history = <HTMLHeadingElement>document.createElement('h2')
    history.classList.add('history')
    history.textContent = operation
    
    const current = <HTMLParagraphElement>document.createElement('p')
    current.classList.add('current')
    current.textContent = `Current: ${currentDate}`

    info.appendChild(current)
    info.appendChild(history)
    TABLE_HISTORY?.appendChild(info)
  })
}