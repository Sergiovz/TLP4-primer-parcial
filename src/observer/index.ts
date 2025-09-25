interface Observador {
  cambiarEstado(mensaje: string): void;
}

class Equipo {
  private observadores: Observador[] = [];

  constructor(
    private nombre: string,
    private tipo: string,
    private estado: string
  ) {}

  agregarObservador(obs: Observador) {
    this.observadores.push(obs);
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
    this.notificar();
  }

  private notificar() {
    const mensaje = `${this.nombre} ha cambiado su estado a ${this.estado}`;
    this.observadores.forEach((obs) => obs.cambiarEstado(mensaje));
  }
}

class Soporte implements Observador {
  cambiarEstado(mensaje: string): void {
    console.log(`Soporte notificado: ${mensaje}`);
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
