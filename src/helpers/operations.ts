

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

export const resolveOperations = (operacion: string): number => {
  const patron = /([-+*/])/;

  const valores: string[] = operacion.split(patron);
  const operadores: string[] = valores.filter((valor) => ['+', '-', '*', '/'].includes(valor));
  const numeros = valores.map((valor) => parseInt(valor, 10)).filter((valor) => !isNaN(valor));

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


  return sumaResta;
};