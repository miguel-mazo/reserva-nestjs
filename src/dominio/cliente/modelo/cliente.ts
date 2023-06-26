export class Cliente {
  readonly #id: number;
  readonly #nombre: string;

  constructor(id:number, nombre: string) {
    this.#id = id;
    this.#nombre = nombre;
  }

  get id(): number {
    return this.#id
  }

  get nombre(): string {
    return this.#nombre;
  }
}
