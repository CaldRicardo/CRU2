import { GestorEstudiantes } from "./Modulos/estudiante.js";
import { generarReportes } from "./Modulos/reportes.js";
import readlineSync from "readline-sync";

// Creamos la instancia del gestor
const gestor = new GestorEstudiantes();

// Menú principal
function mostrarMenu() {
  console.log("\n--- Gestión de Estudiantes ---");
  console.log("1. Agregar estudiante");
  console.log("2. Listar estudiantes");
  console.log("3. Buscar estudiante por ID o nombre");
  console.log("4. Generar reportes");
  console.log("5. Salir");
  return readlineSync.question("Seleccione una opción: ");
}

// Loop principal
let opcion;
do {
  opcion = mostrarMenu();

  switch (opcion) {
    case "1": {
      const nombre = readlineSync.question("Nombre: ");
      const edad = parseInt(readlineSync.question("Edad: "), 10);
      const area = readlineSync.question("Área de estudio: ");
      const calificaciones = {};

      let agregarOtra = "si";
      while (agregarOtra.toLowerCase() === "si") {
        const materia = readlineSync.question("Nombre de la materia: ");
        const calificacion = parseFloat(readlineSync.question("Calificación: "));
        calificaciones[materia] = calificacion;
        agregarOtra = readlineSync.question("¿Agregar otra materia? (si/no): ");
      }

      gestor.agregarEstudiante(nombre, edad, area, calificaciones);
      console.log("✅ Estudiante agregado correctamente.");
      break;
    }

    case "2": {
      const lista = gestor.listarEstudiantes();
      console.log("\n📋 Estudiantes registrados:");
      console.log(lista);
      break;
    }

    case "3": {
      const criterio = readlineSync.question("Ingrese ID o nombre: ");
      const resultado = gestor.buscarEstudiante(criterio);
      if (resultado) {
        console.log("\n👤 Estudiante encontrado:");
        console.log(resultado);
      } else {
        console.log("❌ Estudiante no encontrado.");
      }
      break;
    }

    case "4": {
      const estudiantes = gestor.obtenerEstudiantes();
      const reportes = generarReportes(estudiantes);
      console.log("\n📊 Reportes generados:");
      console.log(reportes);
      break;
    }

    case "5":
      console.log("👋 Cerrando sistema...");
      break;

    default:
      console.log("❌ Opción inválida. Intenta de nuevo.");
  }

  if (opcion !== "5") readlineSync.question("\nPresiona Enter para continuar...");
} while (opcion !== "5");