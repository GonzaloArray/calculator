export const formatNumber = (operationString : string): string =>  {
  const parts = operationString.split(/(?:\+|\-|\*|\/)/g);
  
  if (!parts) {
    return "";
  }

  const formattedParts = parts.map(part => {
    const num = parseFloat(part);
    return num.toLocaleString('es-ES', { minimumFractionDigits: 0 });
  });

  const operators = operationString.match(/(?:\+|\-|\*|\/)/g);

  let formattedString = "";
  for (let i = 0; i < formattedParts.length; i++) {
    formattedString += formattedParts[i];
    if (operators && operators[i]) {
      formattedString += operators[i];
    }
  }

  return formattedString;
}