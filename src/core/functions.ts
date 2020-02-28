
/**
 *  Finders
 */
export function byId(id: number): any {
  return function (item: { id: number }): boolean { return item.id == id }
}

export function byNumber(number: number): any {
  return function (item: { number: number }): boolean { return item.number == number }
}

/**
 * Sorters
 */
interface WithNumber {
  readonly number: number,
  [propName: string]: any;
}

export function ascentByNumber(a: WithNumber, b: WithNumber): number {
  return a.number - b.number;
}
