export function calcularPromedio(calificaciones) {
    const notas = Object.values(calificaciones);
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return notas.length > 0 ? suma / notas.length : 0;
  }