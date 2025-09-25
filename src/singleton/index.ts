class Configuration {
  private static instancia: Configuration;
  private constructor() {}

  static obtenerInstancia(): Configuration {
    if (!Configuration.instancia) {
      Configuration.instancia = new Configuration();
    }
    return Configuration.instancia;
  }

  set(modo: string, detalle: string) {
    (this as any)[modo] = detalle;
  }
    get(modo: string) {
    return (this as any)[modo];
    }
}

const conf1 = Configuration.obtenerInstancia();
const conf2 = Configuration.obtenerInstancia();

conf1.set("modo", "producción");
console.log(conf2.get("modo"));