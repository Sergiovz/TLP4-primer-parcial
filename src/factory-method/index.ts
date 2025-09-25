interface Producto {
  detalles(tipo:string, nombre: string, ram: string, procesador: string): string;
}

class Notebook implements Producto {
  detalles(tipo:string, nombre: string, ram: string, procesador: string): string {
    return `Tipo: ${tipo}, Nombre: ${nombre}, RAM: ${ram}, Procesador: ${procesador}`;
  }
}

class Desktop implements Producto {
  detalles(tipo:string, nombre: string, ram: string, procesador: string): string {
    return `Tipo: ${tipo}, Nombre: ${nombre}, RAM: ${ram}, Procesador: ${procesador}`;
  }
}

class Servidor implements Producto {
  detalles(tipo:string, nombre: string, ram: string, procesador: string): string {
    return `Tipo: ${tipo}, Nombre: ${nombre}, RAM: ${ram}, Procesador: ${procesador}`;
  }
}

class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Producto {
    if (tipo === "Notebook") {
      return new Notebook();
    }
    if (tipo === "Desktop") {
      return new Desktop();
    }
    if (tipo === "Servidor") {
        return new Servidor();
    }
    throw new Error("Tipo no reconocido");
  }
}

const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles("Servidor", "Dell PowerEdge", "32GB", "Xeon"));