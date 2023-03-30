

export const operationMultiple = (numeros: number[], operadores: string[]): number => {

  const NotIsExist = operadores.find(operadore => operadore === '/' || operadore === '*');

  if (!NotIsExist) return numeros[0]

  return numeros.reduce((acc, valor, index) => {
    const operador = operadores[index - 1];

    if (operador === '*') {
      return acc * valor;
    } else if (operador === '/') {
      return acc / valor;
    } else {
      return acc;
    }
  }, numeros[0]);
};

function parseEquation(equation: string): { valor: string[], operadores: string[] } {
  let currentNumber: string = '';

  const result = equation.split('').reduce((acc: { valor: string[], operadores: string[] }, char: string, i: number) => {

    if (char === '-' && i !== 0 && equation.charAt(i - 1) === '-') {
      acc.operadores.push('-');
      acc.valor.push(currentNumber)
      currentNumber = '';

    } else if (!isNaN(Number(equation.charAt(i)))  || i === 0 && char === '-') {
      currentNumber += char;
    }

    if ((char === '+' || char === '-' || char === '*' || char === '/') && i >= 1) {
      acc.valor.push(currentNumber);
      acc.operadores.push(char);
      currentNumber = '';
    }

    if (i === equation.length - 1) {
      acc.valor.push(currentNumber);
    }

    return acc;
  }, { valor: [], operadores: [] })

  return result
}


export const resolveOperations = (operacion: string): number => {
  const { valor, operadores} = parseEquation(operacion)
  console.log(valor, operadores)
  const numeros = valor.map((valor) => parseInt(valor, 10)).filter((valor) => !isNaN(valor));
  
  const multiplicacionDivision = operationMultiple(numeros, operadores);

  const sumaResta = numeros.reduce((acc, valor, index) => {
    const operador = operadores[index - 1];
    if (operador === '+') {
      return acc + valor;
    } else if (operador === '-') {
      return acc - valor;
    } else {
      return acc;
    }
  }, multiplicacionDivision);

  return sumaResta
};