export const getDate = (): string => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1; // Sumamos 1 porque los meses empiezan en 0
  const anio = fecha.getFullYear();

  // Formateamos la fecha con ceros a la izquierda si es necesario
  const diaFormateado = dia < 10 ? `0${dia}` : dia;
  const mesFormateado = mes < 10 ? `0${mes}` : mes;

  return `${diaFormateado}/${mesFormateado}/${anio}`;
}