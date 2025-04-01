import { estudiantes } from "../data/estudiantes.js";
import { calcularPromedio } from "./utils.js";

// 1️⃣ Listado de estudiantes
export function listadoEstudiantes() {
  return estudiantes.map(e => ({ nombre: e.nombre, área: e.nivel }));
}

// 2️⃣ Buscar estudiante por ID o nombre
export function buscarEstudiante(valor) {
  return estudiantes.find(e =>
    e.id === valor || e.nombre.toLowerCase() === valor.toLowerCase()
  );
}

// 3️⃣ Promedio por estudiante
export function promedioPorEstudiante() {
  return estudiantes.map(e => ({
    nombre: e.nombre,
    promedio: Number(calcularPromedio(e.calificaciones).toFixed(1)),
    área: e.nivel
  }));
}