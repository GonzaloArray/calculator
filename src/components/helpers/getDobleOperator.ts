
let lastChar: string = '';

export const hasDoubleOperator = (s: string, len:number): boolean =>{

  if (['+', '/', '*'].includes(s)) {
    return true
  }

  if (len > 1 && s === '-') {
    lastChar += s;
  }
  
  if (lastChar.length === 2) {
    lastChar = ''
    return true;
  }

  return false
}