import { estudiantes } from "../data/estudiantes.js";

export function listarEstudiantes() {
  return estudiantes;
}

export function actualizarEstudiante(id, nuevosDatos) {
  const estudiante = estudiantes.find(e => e.id === id);
  if (estudiante) {
    Object.assign(estudiante, nuevosDatos);
    return true;
  }
  return false;
}