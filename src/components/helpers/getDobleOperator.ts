let lastChar: string = '';

export const hasDoubleOperator = (s: string): boolean =>{

  if (['+', '/', '*'].includes(s)) {
    return true
  }

  if (s === '-') {
    lastChar += s;
  }
  
  if (lastChar.length === 2) {
    lastChar = ''
    return true;
  }

  return false
}