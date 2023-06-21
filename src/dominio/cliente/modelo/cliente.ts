export class Cliente {
  readonly #nombre: string;

  constructor(nombre: string) {
    this.#nombre = nombre;
  }

  get nombre(): string {
    return this.#nombre;
  }
}
